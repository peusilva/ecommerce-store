import { USDformatter } from "@/lib/utils";
import { useEffect, useState } from "react";

interface CurrencyProps {
  value?: string | number;
}

const Currency: React.FC<CurrencyProps> = ({ value }) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  const formattedPrice = USDformatter.format(Number(value));
  return <div className="font-semibold">{formattedPrice}</div>;
};

export default Currency;
