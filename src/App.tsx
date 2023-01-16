import { useEffect, useState } from "react";
import Card from "./ui/Card";


const url = 'https://api.adviceslip.com/advice';

type initialProps = {
  slip: {
    id: number;
    advice: string;
  }
}

const initialState = {
  slip: {
    id: "",
    advice: ""
  }
}

const App = () => {
  const [data, setData] = useState<initialProps | any>(initialState);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true)
    try {
      const result = await (await fetch(url)).json();
      setData(result);
      setIsLoading(false);
    } catch (error) {
      throw new Error('Oops... Something went wrong!');
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <main className="bg-dark-blue-900 min-h-screen flex items-center justify-center">
      <Card adviceNumber={data.slip.id} text={data.slip.advice} onClick={fetchData} isLoading={isLoading} />
    </main>
  )
}



export default App;