import { Container, Typography } from "@mui/material"
import { HeroComponent } from "../components/home/HeroComponent"
import { Suspense, useEffect, useState } from "react";
import { Apod } from "../interfaces/apod";
import { APODComponent } from "../components/home/APODComponent";
import { startAPOD } from "../services/nasaApiService";
import { setupLocalStorageCleanup } from "../helpers/setUpLocalStorageCleanUp";
import { PublicProject } from "../components/home/PublicProject";
import { ScrollToTopButton } from "../components/general/ScrollToTopButton";


export const HomePage = () => {

  const [apodData, setApodData] = useState<Apod | null>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchData = async () => {

        const service = await startAPOD();
        if (!service.ok) {
          setError(service.errorMessage)
        }else{
          setApodData(service.data);
          localStorage.setItem('apod', JSON.stringify(service.data));
        }
     
    };

    const getDataFromLocalStorage = localStorage.getItem('apod');
    if (!getDataFromLocalStorage) {
      fetchData();
    } else {
      setApodData(JSON.parse(getDataFromLocalStorage));
    }
  }, []);

  useEffect(() => {
    // Configura el temporizador para borrar el localStorage a medianoche en Argentina y limpia el temporizador al desmontar el componente.
    const timeoutId = setupLocalStorageCleanup(() => {
      localStorage.clear();
    });

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <HeroComponent />
      <Container>
        <Suspense fallback={<Typography variant="h1">Loading...</Typography>}>
        {apodData && <APODComponent apodData={apodData}/>}
        {error && <Typography>{error}</Typography>}
        </Suspense>
        <PublicProject
          name="John Doe"
          imageSrc="https://img.freepik.com/free-photo/workers-it-company-working-computer_1303-19432.jpg?w=360&t=st=1711410186~exp=1711410786~hmac=8af4e0b536ef3f5f556ece921ee07fc3388a410fbe2e9c8ffd362c2da2870a86"
          caption="Software Engineer"
          profession="Software Developer"
          universityDegree="Bachelor of Science in Computer Science"
          workingAlone={false}
          projectText="John Doe leads a team working on a project that utilizes stars for space navigation. Their goal is to enhance space exploration by developing advanced algorithms and software systems that enable spacecraft to calculate their position and trajectory with unprecedented precision. This innovative system has the potential to revolutionize space navigation capabilities and may find applications in satellite navigation, space mapping, and near-Earth object monitoring. John and his team are dedicated to technical excellence and innovation, aiming to make significant contributions to the advancement of space exploration and understanding of the cosmos."
          />
        <ScrollToTopButton  targetId="scrollButton"/> 
      </Container>
      
    </>
  )
}
