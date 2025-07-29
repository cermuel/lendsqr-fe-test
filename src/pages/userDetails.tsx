import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Button from "../components/shared/button";
import Seperator from "../components/ui/user/seperator";

import users from "../data/data.json";
import Detail from "../components/ui/user/detail";

import { formatNaira } from "../utils/helpers";

import "../styles/pages/user-details.scss";

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
    <div className="user-details">
      <button onClick={() => navigate("/users")} className="back-button">
        <img src="/icons/arrow-back.svg" alt="arrow icon" />
        <span>Back to Users</span>
      </button>
      <div className="header">
        <h1>Users</h1>
        <div className="action-buttons">
          <Button variant="colored-outlined">BLACKLIST USER</Button>
          <Button variant="danger-outlined">ACTIVATE USER</Button>
        </div>
      </div>

      <div className="profile-card">
        <div className="profile-header">
          <img src="/images/avatar-2.svg" alt="avatar" />

          <div className="user-info">
            <h1>
              {user?.firstName} {user?.lastName}
            </h1>
            <span>{user?.id}</span>
          </div>

          <Seperator />

          <div className="user-tier">
            <p>User's Tier</p>
            <div className="stars">
              <img src="/icons/star-filled.svg" alt="star filled icon" />
              <img src="/icons/star.svg" alt="star icon" />
              <img src="/icons/star.svg" alt="star icon" />
            </div>
          </div>

          <Seperator />

          <div className="bank-details">
            <h1>{formatNaira(Number(user?.minIncome.toFixed(0)) ?? 0)}</h1>
            <span>9912345678/Providus Bank</span>
          </div>
        </div>

        <div className="tabs">
          <div className="tab-list">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setSelectedTab(tab)}
                className={`${tab === selectedTab ? "active" : ""}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="user-details-body">
        <div className="section">
          <h1>Personal Information</h1>
          <div className="details-grid">
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
