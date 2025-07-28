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

const Users = () => {
  const headers = [
    "Organization",
    "username",
    "email",
    "phone number",
    "date joined",
    "status",
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(100);

  const totalEntries = users.length;

  const displayedUsers = users.slice(
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
                      className="absolute flex flex-col items-center justify-center z-10 mt-2 right-0 w-[270px] h-[130px] rounded-lg bg-[#fff] p-2 border border-[#545F7D0A] transition duration-200 ease-in-out"
                    >
                      <div
                        className={`flex py-1.5 hover:bg-[#FBFBFB] rounded-sm w-full text-[#545F7D] font-medium text-sm justify-center items-center gap-2 cursor-pointer`}
                      >
                        <img src="/icons/eye.svg" alt="eye icon" />
                        View Details
                      </div>
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
                </div>
              </TableColumn>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {displayedUsers.map((user, i) => (
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
                    <div
                      className={`flex py-1.5 hover:bg-[#FBFBFB] rounded-sm w-full text-[#545F7D] font-medium text-sm justify-center items-center gap-2 cursor-pointer`}
                    >
                      <img src="/icons/eye.svg" alt="eye icon" />
                      View Details
                    </div>
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
