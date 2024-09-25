import Features from "@/components/Features";
import About from "@/components/About";
import ProductsTabs from "@/components/products/productsTabs";
import { getFetch } from "@/utils/fetch";
import Contact from "@/components/contact/Contact";

export default async function Home() {

  // const productsTabs = await getFetch('')

  return (
    <>
      <Features/>
      {/* <ProductsTabs tabList={productsTabs.tabList} tabPanel={productsTabs.tabPanel} /> */}
      <About/>
      <Contact/>
    </>
  );
}
