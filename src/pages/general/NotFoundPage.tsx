import { ContentLayout } from "@components/general/ContentLayout/ContentLayout";
import { MainLayout } from "@components/general/MainLayout/MainLayout";
import { useTranslation } from "react-i18next";

export const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <ContentLayout>
        <div className="py-8">{t("general.pageNotFound")}</div>
      </ContentLayout>
    </MainLayout>
  );
};
