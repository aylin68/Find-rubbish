/* import React, { createContext, useState } from "react";
import rubbishData from "../rubbishData.json";

const LocationContext = createContext(null);
export default LocationContext;

export function LocationContextProvider({ children }) {
  const [data, setData] = useState(rubbishData);
  console.log(data);
  return (
    <LocationContext.Provider value={{ data, setData }}>
      {children}
    </LocationContext.Provider>
  );
}
 */
