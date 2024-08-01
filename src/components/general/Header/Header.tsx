import GoogleFontLoader from "react-google-font";
import { Link } from "@tanstack/react-router";
import { ContentLayout } from "@components/general/ContentLayout/ContentLayout";

export const Header = () => {
  return (
    <header className="fixed flex items-center w-full z-[1] h-headerHeight bg-primaryDark text-textInverted shadow-normal">
      <GoogleFontLoader fonts={[{ font: "Open Sans", weights: [700] }]} />
      <ContentLayout>
        <Link
          className="inline-block text-[36px] leading-[40px] font-['Open Sans'] font-bold uppercase"
          to="/"
          search={{ id: "", name: "", city: "", active: false }}
        >
          Contactify
        </Link>
      </ContentLayout>
    </header>
  );
};
