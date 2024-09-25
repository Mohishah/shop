import Features from "@/components/Features";
import ProductsTabs from "@/components/products/productsTabs";
import { getFetch } from "@/utils/fetch";

export default async function Home() {

  const productsTabs = await getFetch('')

  return (
    <>
      <Features/>
      <ProductsTabs tabList={productsTabs.tabList} tabPanel={productsTabs.tabPanel} />
    </>
  );
}
