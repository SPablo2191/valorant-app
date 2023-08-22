import { useEffect, useState } from "react";
import { pathnameEnum } from "../../project/interfaces/path.enum";
import { Page } from "../../project/models/page.interface";

const apiUrl: string = import.meta.env.VITE_API_URL;

export const useModelList = <Model>(
  endpoint: pathnameEnum,
  params?: string
) => {
  const [data, setData] = useState<Model[]>([]);

  const getData = async () => {
    try {
      const response = await fetch(`${apiUrl}${endpoint}${params}`);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data: Page<Model> = await response.json();

      setData(data.data);
    } catch (error) {
      if (error instanceof Error)
        throw new Error(`Error fetching data: ${error.message}`);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, setData, getData };
};
