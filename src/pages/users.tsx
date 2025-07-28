import { HiOutlineDotsVertical } from "react-icons/hi";
import {
  Table,
  TableBody,
  TableColumn,
  TableHead,
  TableRow,
} from "../components/shared/table";
import users from "../data/data.json";
import { formatDateTime } from "../utils/helpers";
import Paginator from "../components/ui/paginator";
import { useState } from "react";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { Dropdown } from "../components/ui/dropdown";
import FilterInput from "../components/ui/input-filter";
import Button from "../components/shared/button";
import { useNavigate } from "react-router-dom";

const headers = [
  "Organization",
  "username",
  "email",
  "phone number",
  "date joined",
  "status",
];
const Users = () => {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(100);

  const [filterDrafts, setFilterDrafts] = useState({
    organization: "",
    username: "",
    email: "",
    date: "",
    phoneNumber: 0,
    status: "",
  });

  const [filters, setFilters] = useState({
    organization: "",
    username: "",
    email: "",
    date: "",
    phoneNumber: 0,
    status: "",
  });

  const resetFilter = () => {
    setFilterDrafts({
      organization: "",
      username: "",
      email: "",
      date: "",
      phoneNumber: 0,
      status: "",
    });
    setFilters({
      organization: "",
      username: "",
      email: "",
      date: "",
      phoneNumber: 0,
      status: "",
    });
  };
  const totalEntries = users.length;

  const filteredUsers = users.filter((user) => {
    const matchOrg = filters.organization
      ? user.organization
          .toLowerCase()
          .includes(filters.organization.toLowerCase())
      : true;
    const matchUsername = filters.username
      ? `${user.firstName} ${user.lastName}`
          .toLowerCase()
          .includes(filters.username.toLowerCase())
      : true;
    const matchEmail = filters.email
      ? user.email.toLowerCase().includes(filters.email.toLowerCase())
      : true;
    const matchPhone = filters.phoneNumber
      ? user.phoneNumber.toString().includes(filters.phoneNumber.toString())
      : true;
    const matchDate = filters.date
      ? new Date(user.dateJoined).toISOString().slice(0, 10) === filters.date
      : true;
    const matchStatus = filters.status
      ? user.status.toLowerCase() === filters.status.toLowerCase()
      : true;

    return (
      matchOrg &&
      matchUsername &&
      matchEmail &&
      matchPhone &&
      matchDate &&
      matchStatus
    );
  });

  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );
  return (
    <div className="w-full h-full flex flex-col gap-6 ">
      <div className="w-full">
        <h1 className="font-medium text-[#213F7D] text-2xl">Users</h1>
      </div>
      <Table>
        <TableHead>
          <TableRow>
            {headers.map((header, index) => (
              <TableColumn key={index} isHeader>
                <div
                  className={`${
                    header === "date joined" ? "pr-40" : "pr-10"
                  } flex cursor-pointer items-end gap-2`}
                >
                  {header}
                  <Popover>
                    <PopoverButton
                      className={"outline-none w-3 h-3 cursor-pointer"}
                    >
                      <img
                        src="/icons/filter.svg"
                        className="w-3 h-3 mt-0.5"
                        alt="filter icon"
                      />
                    </PopoverButton>
                    <PopoverPanel
                      anchor="bottom"
                      className="flex flex-col gap-4 items-center py-6 justify-center z-10 mt-2 w-[270px] rounded-lg bg-[#fff] border border-[#545F7D0A] transition duration-200 ease-in-out"
                    >
                      <Dropdown
                        label="Organization"
                        options={[
                          { label: "Lendsqr", value: "lendsqr" },
                          { label: "Lendstar", value: "lendstar" },
                          {
                            label: "Irorun",
                            value: "irorun",
                          },
                        ]}
                        onSelect={(option) =>
                          setFilterDrafts({
                            ...filterDrafts,
                            organization: option.value.toString(),
                          })
                        }
                      />
                      <FilterInput
                        label="Username"
                        value={filterDrafts.username}
                        onChange={(e) => {
                          setFilterDrafts({
                            ...filterDrafts,
                            username: e.target.value,
                          });
                        }}
                        placeholder="Username"
                      />
                      <FilterInput
                        label="Email"
                        value={filterDrafts.email}
                        onChange={(e) => {
                          setFilterDrafts({
                            ...filterDrafts,
                            email: e.target.value,
                          });
                        }}
                        placeholder="Email"
                      />

                      <FilterInput
                        label="Date"
                        value={filterDrafts.date}
                        onChange={(e) => {
                          setFilterDrafts({
                            ...filterDrafts,
                            date: e.target.value,
                          });
                        }}
                        type="date"
                        placeholder="Date"
                      />
                      <FilterInput
                        label="Phone Number"
                        value={filterDrafts.phoneNumber}
                        onChange={(e) => {
                          setFilterDrafts({
                            ...filterDrafts,
                            phoneNumber: Number(e.target.value),
                          });
                        }}
                        placeholder="Phone Number"
                        type="number"
                      />
                      <Dropdown
                        label="Status"
                        options={[
                          { label: "Active", value: "active" },
                          { label: "Inactive", value: "inactive" },
                          {
                            label: "Pending",
                            value: "pending",
                          },
                          {
                            label: "Blacklisted",
                            value: "blacklisted",
                          },
                        ]}
                        onSelect={(option) =>
                          setFilterDrafts({
                            ...filterDrafts,
                            status: option.value.toString(),
                          })
                        }
                      />
                      <div className="flex items-center gap-2 w-[230px]">
                        <Button onClick={resetFilter} variant="outlined">
                          Reset
                        </Button>
                        <Button onClick={() => setFilters(filterDrafts)}>
                          Filter
                        </Button>
                      </div>
                    </PopoverPanel>
                  </Popover>
                </div>
              </TableColumn>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedUsers.map((user, i) => (
            <TableRow key={i}>
              <TableColumn>
                <span className="capitalize">{user.organization}</span>
              </TableColumn>
              <TableColumn>
                {user.firstName} {user.lastName}
              </TableColumn>
              <TableColumn>{user.email}</TableColumn>
              <TableColumn>0{user.phoneNumber}</TableColumn>
              <TableColumn>{formatDateTime(user.dateJoined)}</TableColumn>
              <TableColumn>
                <span className={`status-pill ${user.status.toLowerCase()}`}>
                  {user.status}
                </span>
              </TableColumn>
              <TableColumn>
                <Popover>
                  <PopoverButton
                    className={"more-button outline-none cursor-pointer"}
                  >
                    <HiOutlineDotsVertical />
                  </PopoverButton>
                  <PopoverPanel
                    anchor="bottom end"
                    className="absolute flex flex-col items-center justify-center z-10 mt-2 right-0 w-[180px] h-[130px] rounded-lg bg-[#fff] p-2 border border-[#545F7D0A] transition duration-200 ease-in-out"
                  >
                    <button
                      className={`flex py-1.5 hover:bg-[#FBFBFB] rounded-sm w-full text-[#545F7D] font-medium text-sm justify-center items-center gap-2 cursor-pointer`}
                      onClick={() => navigate(`/users/${user.id}`)}
                    >
                      <img src="/icons/eye.svg" alt="eye icon" />
                      View Details
                    </button>
                    <div
                      className={`flex py-1.5 hover:bg-[#FBFBFB] rounded-sm w-full text-[#545F7D] font-medium text-sm justify-center items-center gap-2 cursor-pointer`}
                    >
                      <img src="/icons/blacklist.svg" alt="eye icon" />
                      Blacklist User
                    </div>
                    <div
                      className={`flex py-1.5 hover:bg-[#FBFBFB] rounded-sm w-full text-[#545F7D] font-medium text-sm justify-center items-center gap-2 cursor-pointer`}
                    >
                      <img src="/icons/activate.svg" alt="eye icon" />
                      Activate User
                    </div>
                  </PopoverPanel>
                </Popover>
              </TableColumn>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Paginator
        totalEntries={totalEntries}
        entriesPerPage={entriesPerPage}
        currentPage={currentPage}
        onChangePage={setCurrentPage}
        onChangeEntriesPerPage={(value) => {
          setEntriesPerPage(value);
          setCurrentPage(1); // Reset to first page
        }}
      />
    </div>
  );
};

export default Users;
