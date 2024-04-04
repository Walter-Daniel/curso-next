
import moment from 'moment-timezone';

export const setupLocalStorageCleanup = (callback: () => void) => {
  // Obtiene la fecha y hora actual en la zona horaria de Argentina
  const now = moment.tz('America/Argentina/Buenos_Aires');

  // Calcula la fecha y hora para la próxima medianoche en Argentina
  const nextMidnight = now.clone().endOf('day');

  // Calcula el tiempo de espera hasta la próxima ejecución del borrado del localStorage
  let timeUntilNextMidnight = nextMidnight.diff(now);

  // Configura el temporizador para borrar el localStorage en el tiempo especificado para luego ejecutar la función
  const timeoutId = setTimeout(() => {
    callback();
  }, timeUntilNextMidnight);

  return timeoutId;
};
