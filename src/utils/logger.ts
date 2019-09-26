const moment = require('moment');

export function log(message: string, level = 'INFO') {
  const time = moment().format('HH:mm:ss');
  if (level === 'ERROR') {
    console.trace(`[${time}] - ${level} - ${message}`);
  } else {
    console.log(`[${time}] - ${level} - ${message}`);
  }
}

export function trace(method: string, url: string, agent: string | undefined) {
  const time = moment().format('HH:mm:ss');
  console.log(`[${time}] - HTTP: [${method}] - URI: [${url}] - Agent: [${agent}])`);
}
