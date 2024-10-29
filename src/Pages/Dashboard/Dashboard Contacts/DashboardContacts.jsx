import BoxShape from "@/Components/Common/BoxShape";
import Product from "@/Components/Dashboard/DashboardContact/Product";
import { useState } from "react";

const DashboardContacts = () => {
  const [activeTab, setActiveTab] = useState("favourites");
  return (
    <div>
      <div className="flex gap-6">
        <div className="w-[68%]">
          <BoxShape>
            <div className="py-4 px-6 flex items-center justify-between text-[18px] text-[#111518]">
              <p>Profile</p>
              <p>Card Details</p>
            </div>
            <div className="mt-6 pb-[60px]">
              <div>
                <Product />
              </div>
              <div className="mt-3">
                <Product />
              </div>
              <div className="mt-3">
                <Product />
              </div>
            </div>
          </BoxShape>
        </div>
        <div className="w-[32%] h-full">
          <BoxShape>
            <div className="flex items-center justify-between mb-6">
                <button className={`p-[45px] pt-0 pb-2 text-[18px] border-b ${activeTab === "favourites" ? "border-black" :"border-transparent"}`} onClick={() => setActiveTab("favourites")}>Favorite List</button>
                <button className={`p-[45px] pt-0 pb-2 text-[18px] border-b ${activeTab === "recent" ? "border-black" :"border-transparent"}`} onClick={() => setActiveTab("recent")}>Favorite List</button>
            </div>
            {activeTab === "favourites" ? (
              <div>
                <div>
                  <Product />
                </div>
                <div className="mt-3">
                  <Product />
                </div>
                <div className="mt-3">
                  <Product />
                </div>
                <div className="mt-3">
                  <Product />
                </div>
                <div className="mt-3">
                  <Product />
                </div>
              </div>
            ) : (
              ""
            )}
            {activeTab === "recent" ? (
              <div>
                <div>
                  <Product />
                </div>
                <div className="mt-3">
                  <Product />
                </div>
                <div className="mt-3">
                  <Product />
                </div>
              </div>
            ) : (
              ""
            )}
          </BoxShape>
        </div>
      </div>
    </div>
  );
};

export default DashboardContacts;
