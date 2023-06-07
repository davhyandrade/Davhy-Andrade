import { useRouter } from "next/router";
import FullImage from "@/components/FullImage";

export default function FullImagePage() {
  const router = useRouter();

  const { value } = router.query; 
  
  return (
    <FullImage value={value} />
  )
}