import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/shared/button";

import users from "../data/data.json";
import { useEffect, useState } from "react";
import Seperator from "../components/ui/seperator";
import { formatNaira } from "../utils/helpers";
import Detail from "../components/ui/detail";

const tabs = [
  "General Details",
  "Documents",
  "Bank Details",
  "Loans",
  "Savings",
  "App and System",
];

const UserDetails = () => {
  const { userId } = useParams();
  const navigate = useNavigate();

  const user = users.find((u) => u.id === userId);

  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  useEffect(() => {
    if (!user) {
      navigate("/users");
    }
  }, []);

  return (
    <div className="w-full h-full flex flex-col gap-6 overflow-y-scroll">
      <button
        onClick={() => navigate("/users")}
        className="flex items-center gap-2 cursor-pointer"
      >
        <img src="/icons/arrow-back.svg" alt="arrow icon" />
        <span className="text-[#545F7D]">Back to Users</span>
      </button>
      <div className="w-full flex items-center justify-between flex-wrap">
        <h1 className="font-medium text-[#213F7D] text-2xl">Users</h1>
        <div className="flex items-center gap-4 max-w-[400px] w-full">
          <Button variant="colored-outlined">BLACKLIST USER</Button>
          <Button variant="danger-outlined">ACTIVATE USER</Button>
        </div>
      </div>

      <div className="w-full p-6 pb-0 bg-white border border-[#213F7D0F]">
        <div className="flex md:h-[100px] flex-wrap md:flex-nowrap md:items-center items-start gap-6 py-1">
          <img src="/images/avatar-2.svg" alt="" className="w-20 h-20" />

          <div className="flex flex-col">
            <h1 className="text-[22px] text-[#213F7D] font-medium">
              {user?.firstName} {user?.lastName}
            </h1>
            <span className="text-sm text-[#545F7D]">{user?.id}</span>
          </div>

          <Seperator />

          <div className="flex flex-col gap-1">
            <p className="text-sm text-[#545F7D] font-medium">User's Tier</p>
            <div className="flex items-center gap-[1px]">
              <img src="/icons/star-filled.svg" alt="star filled icon" />
              <img src="/icons/star.svg" alt="star icon" />
              <img src="/icons/star.svg" alt="star icon" />
            </div>
          </div>

          <Seperator />

          <div className="flex flex-col">
            <h1 className="text-[22px] text-[#213F7D] font-medium">
              {formatNaira(Number(user?.minIncome.toFixed(0)) ?? 0)}
            </h1>
            <span className="text-xs text-[#213F7D]">
              9912345678/Providus Bank
            </span>
          </div>
        </div>

        <div className="w-full overflow-x-auto mt-10">
          <div className="flex items-end min-w-max md:min-w-full w-full gap-10 md:gap-4">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setSelectedTab(tab)}
                className={`flex-shrink-0 md:flex-1 pb-2 border-b-2 text-sm whitespace-nowrap ${
                  tab === selectedTab
                    ? "border-b-[#39CDCC] text-[#39CDCC]"
                    : "text-[#000000CC] border-b-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full p-6 space-y-7 bg-white border border-[#213F7D0F]">
        <div className="w-full">
          <h1 className="font-medium text-[#213F7D] mb-6">
            Personal Information
          </h1>
          <div className="w-full grid gap-y-5 lg:grid-cols-4 xl:grid-cols-5 grid-cols-2">
            <Detail
              label="full name"
              value={`${user?.firstName} ${user?.lastName}`}
            />
            <Detail label="PHONE NUMBER" value={`${user?.phoneNumber}`} />
            <Detail label="EMAIL ADDRESS" value={`${user?.email}`} />
            <Detail label="BVN" value={`${user?.phoneNumber}`} />
            <Detail label="GENDER" value={`${user?.gender}`} />
            <Detail label="MARITAL STATUS" value={`Single`} />
            <Detail label="CHILDREN" value={`None`} />{" "}
            <Detail label="Type of residence" value={`Parent’s Apartment`} />
          </div>
        </div>
        <Seperator orientation="horizontal" />
        <div className="w-full">
          <h1 className="font-medium text-[#213F7D] mb-6">
            Education and Employment
          </h1>
          <div className="w-full grid gap-y-5 lg:grid-cols-4  grid-cols-2">
            <Detail label="level of education" value={`B.Sc`} />
            <Detail
              label="employment status"
              value={`${user?.employmentStatus}`}
            />
            <Detail label="sector of employment" value={`FinTech`} />
            <Detail
              label="Duration of employment"
              value={`${user?.employmentDuration}`}
            />
            <Detail label="office email" value={`${user?.email}`} />
            <Detail
              label="monthly income"
              value={`${formatNaira(
                Number(Number(user?.minIncome ?? 0).toFixed(0))
              )} - ${formatNaira(
                Number(Number(user?.maxIncome ?? 0).toFixed(0))
              )}`}
            />
            <Detail
              label="loan repayment"
              value={`${formatNaira(
                Number(Number(user?.loanRepayment ?? 0).toFixed(0) ?? 0)
              )}`}
            />
          </div>
        </div>
        <Seperator orientation="horizontal" />
        <div className="w-full">
          <h1 className="font-medium text-[#213F7D] mb-6">Socials</h1>
          <div className="w-full grid gap-y-5 lg:grid-cols-4 xl:grid-cols-5 grid-cols-2">
            <Detail
              label="twitter"
              value={`@${user?.firstName.toLowerCase()}_${user?.lastName.toLowerCase()}`}
            />
            <Detail
              label="facebook"
              value={`${user?.firstName} ${user?.lastName}`}
            />
            <Detail
              label="instagram"
              value={`@${user?.firstName.toLowerCase()}_${user?.lastName.toLowerCase()}`}
            />
          </div>
        </div>
        <Seperator orientation="horizontal" />
        <div className="w-full">
          <h1 className="font-medium text-[#213F7D] mb-6">Guarantor</h1>
          <div className="w-full grid gap-y-5 lg:grid-cols-4 xl:grid-cols-5 grid-cols-2">
            <Detail label="full name" value={`${user?.guarantor.name}`} />
            <Detail label="phone number" value={`${user?.phoneNumber}`} />
            <Detail label="email address" value={`${user?.guarantor.email}`} />
            <Detail
              label="relationship"
              value={`${user?.guarantor.relationship}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
