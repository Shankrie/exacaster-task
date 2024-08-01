import { getContacts } from "@api/contactApi";
import { Button } from "@components/general/Button/Button";
import { Checkbox } from "@components/general/Checkbox/Checkbox";
import { ContactListTable } from "@components/contact/ContactListTable/ContactListTable";
import { ContactPreview } from "@components/contact/ContactPreview/ContactPreview";
import { Input } from "@components/general/Input/Input";
import { Select } from "@components/general/Select/Select";
import { EyeIcon } from "@icons/EyeIcon";
import { Route } from "@routes/index";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { theme } from "@themes/themeConfig";
import { ContentLayout } from "@components/general/ContentLayout/ContentLayout";
import { useTranslation } from "react-i18next";
import { MainLayout } from "@components/general/MainLayout/MainLayout";
import { ActionLayout } from "@components/general/ActionLayout/ActionLayout";

export const ContactListPage = () => {
  const { data } = useQuery({
    queryKey: ["contacts"],
    queryFn: getContacts,
  });

  const navigate = useNavigate();
  const { t } = useTranslation();
  const search = Route.useSearch();
  const [nameFilterValue, setNameFilterValue] = useState(search.name);
  const [cityFilterValue, setCityFilterValue] = useState(search.city);
  const [activeFilterValue, setActiveFilterValue] = useState(search.active);
  const contacts = data?.data ?? [];

  const allCities = contacts.map((contact) => contact.city);
  const uniqueCities = Array.from(new Set(allCities));

  const filteredData = contacts.filter((contact) => {
    return (
      contact.name.toLowerCase().includes(search.name.toLowerCase()) &&
      contact.city.toLowerCase().includes(search.city.toLowerCase()) &&
      (contact.isActive || !search.active)
    );
  });

  const updateParams = (params: Partial<typeof search>) => {
    navigate({ to: "/", search: { ...search, ...params } });
  };

  useEffect(() => {
    setNameFilterValue(search.name);
    setCityFilterValue(search.city);
    setActiveFilterValue(search.active);
  }, [search]);

  return (
    <MainLayout>
      <ActionLayout>
        <ContentLayout>
          <div className="flex gap-[42px]">
            <div className="flex gap-[14px]">
              <Input
                label={t("contact.name")}
                value={nameFilterValue}
                onChange={({ target }) => setNameFilterValue(target.value)}
              />
              <Select
                label={t("contact.city")}
                value={cityFilterValue}
                options={[
                  { value: "", label: "" },
                  ...uniqueCities.map((city) => ({
                    value: city,
                    label: city,
                  })),
                ]}
                onChange={({ target }) => setCityFilterValue(target.value)}
              />
              <Checkbox
                label={
                  <div className="flex items-center gap-[8px]">
                    {t("contact.showActive")}
                    <EyeIcon fill={theme.colors.textInverted} />
                  </div>
                }
                checked={activeFilterValue}
                onChange={setActiveFilterValue}
              />
            </div>
            <Button
              onClick={() =>
                updateParams({
                  name: nameFilterValue,
                  city: cityFilterValue,
                  active: activeFilterValue,
                })
              }
            >
              {t("general.filter")}
            </Button>
          </div>
        </ContentLayout>
      </ActionLayout>
      <ContentLayout>
        <div className="flex gap-[18px] items-start">
          <ContactListTable
            contacts={filteredData}
            onRowClick={({ id }) => updateParams({ id })}
          />
          {search.id && <ContactPreview id={search.id} />}
        </div>
      </ContentLayout>
    </MainLayout>
  );
};
