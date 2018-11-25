interface Connection {
  effectiveType: string;
  rtt: number;
  downlink: number;
  saveData: boolean;
}

interface WebkitNavigator extends Navigator {
  connection: Connection;
}

export function isDeviceConnectionFast(): boolean {
  const navigator = window.navigator as WebkitNavigator;
  const connection = navigator.connection as Connection;

  if (!connection) {
    return true;
  }

  return connection.effectiveType === "4g" || connection.effectiveType === "3g";
}
