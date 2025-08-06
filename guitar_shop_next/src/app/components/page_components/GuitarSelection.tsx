"use client";

import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState, useCallback } from "react";

import GuitarCard from "../cards/GuitarCard";
import FilterInput from "../micro_elements/FilterInput";
import PaginationInfo from "../micro_elements/PaginationInfo";
import PaginationControls from "../micro_elements/PaginationControls";
import SearchInput from "../micro_elements/SearchInput";
import { useLanguage } from "@/app/providers/LanguageContext";
import shop from "../../../../translations/shop";
import Loading from "../suspense/Loading";
import ErrComponent from "../suspense/ErrComponent";
import ItemNotFound from "../suspense/ItemNotFound";

type GuitarModel = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  type: string;
  __typename?: string;
};

export default function GuitarSelection() {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const brandId = params.brandId as string;
  const { language } = useLanguage();
  const t = shop[language];
  const [data, setData] = useState<GuitarModel[] | []>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  // Getting the url params
  const filterInput = searchParams?.get("filter") || "";
  const searchInput = searchParams?.get("search") || "";
  const page = parseInt(searchParams?.get("page") || "1", 10);

  // Just keeping track of the types and some refs
  const [arrTypes, setArrTypes] = useState<string[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollCooldown = useRef(false);

  const itemsPerPage = 6;

  // updates the url params
  const updateSearchParams = useCallback(
    (updates: { filter?: string; search?: string; page?: number }) => {
      const current = new URLSearchParams(searchParams.toString());

      // update or remove paarm
      Object.entries(updates).forEach(([key, value]) => {
        if (value === "" || value === null || value === undefined) {
          current.delete(key);
        } else {
          current.set(key, value.toString());
        }
      });

      if (
        ("filter" in updates || "search" in updates) &&
        !("page" in updates)
      ) {
        current.delete("page");
      }

      const newUrl = `${window.location.pathname}${
        current.toString() ? `?${current.toString()}` : ""
      }`;
      router.replace(newUrl, { scroll: false });
    },
    [searchParams, router]
  );

  const handleFilterChange = useCallback(
    (newFilter: string) => {
      updateSearchParams({ filter: newFilter });
    },
    [updateSearchParams]
  );

  const handleSearchChange = useCallback(
    (newSearch: string) => {
      updateSearchParams({ search: newSearch });
    },
    [updateSearchParams]
  );

  const handlePageChange = useCallback(
    (newPage: number) => {
      updateSearchParams({ page: newPage });
    },
    [updateSearchParams]
  );

  useEffect(() => {
    fetch(`/api/${brandId}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data) return;
        setData(data);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [brandId]);

  // calc the models filtered
  const filteredModels =
    data?.filter((model: GuitarModel) => {
      const matchesType = filterInput === "" || model.type === filterInput;
      const matchesSearch =
        searchInput === "" ||
        model.name.toLowerCase().includes(searchInput.toLowerCase());

      return matchesType && matchesSearch;
    }) || [];

  useEffect(() => {
    if (!data) return;

    const uniqueTypes = [
      ...new Set(data.map((model: GuitarModel) => model.type).filter(Boolean)),
    ];

    setArrTypes(uniqueTypes as string[]);
  }, [data]);

  // BONUS TASK: SCROLL ITEMS
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const onWheel = (e: WheelEvent) => {
      if (scrollCooldown.current) return;

      scrollCooldown.current = true;
      setTimeout(() => (scrollCooldown.current = false), 300);

      const maxPage = Math.ceil(filteredModels.length / itemsPerPage);

      if (e.deltaY > 0) {
        if (page < maxPage) {
          handlePageChange(page + 1);
        }
      } else {
        if (page > 1) {
          handlePageChange(page - 1);
        }
      }
    };

    container.addEventListener("wheel", onWheel);
    return () => container.removeEventListener("wheel", onWheel);
  }, [filteredModels.length, itemsPerPage, page, handlePageChange]);

  if (loading) return <Loading msg={"Loading..."} />;
  if (error) return <ErrComponent errMsg={error} />;

  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const pagedModels = filteredModels.slice(start, end);

  return (
    <section className="flex flex-col justify-center items-center pb-20 pt-20">
      <h2 className="text-xl text-center text-[44px] font-bold text-zinc-950 mb-4">
        {t.selectSectionTitle}
      </h2>

      {/* Filters and search */}
      <div className="flex flex-col sm:flex-row justify-end items-end w-full gap-4 mb-4 px-4 sm:px-0">
        <FilterInput
          field={filterInput}
          setFiled={handleFilterChange}
          arrTypes={arrTypes}
        />

        <SearchInput setSearch={handleSearchChange} />
      </div>

      {/* Scroll container */}
      {pagedModels.length === 0 ? (
        <ItemNotFound msgOne={t.notFound} msgTwo={t.adjust} />
      ) : (
        <div
          ref={scrollContainerRef}
          className="flex flex-wrap justify-start pl-4 sm:pl-20 items-start p-3 w-full gap-6 overflow-y-auto max-h-[700px] min-h-[500px] mt-4"
        >
          {pagedModels.map((model: GuitarModel) => (
            <GuitarCard
              key={model.id}
              modelId={model.id}
              modelImg={model.image}
              modelName={model.name}
              modelPrice={model.price}
            />
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 px-4 sm:px-0 mt-6">
        <PaginationInfo
          total={filteredModels.length}
          start={start}
          count={pagedModels.length}
        />

        <PaginationControls
          currentPage={page}
          totalItems={filteredModels.length}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
}
