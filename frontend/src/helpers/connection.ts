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
  return (
    connection &&
    (connection.effectiveType === "4g" || connection.effectiveType === "3g")
  );
}
