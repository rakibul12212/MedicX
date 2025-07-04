"use client";
import Button from "@/Components/UI/Button/Button";
import { DatePicker, Space } from "antd";
import { LiaSearchSolid, LiaSyncSolid } from "react-icons/lia";
import { TfiExport } from "react-icons/tfi";

import InventoryReportTab from "./InventoryReportTab/InventoryReportTab";
import InventoryReportCard from "./InventoryReportCard/InventoryReportCard";

const { RangePicker } = DatePicker;
const InventoryReport = () => {
  return (
    <div className="p-5">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-y-4">
        <div>
          <p className="text-3xl font-semibold">Inventory Report</p>
          <p className="text-gray-500 mt-3">
            Track inventory levels, usage patterns, and supply chain metrics
          </p>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <Button
            variant="primary"
            text="Refresh"
            Icon={LiaSyncSolid}
            className="h-[42px] w-full md:w-auto border border-gray-300"
          />
          <Button
            variant="primary"
            text="Export"
            Icon={TfiExport}
            className="h-[42px] w-full md:w-auto border border-gray-300"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-y-4 mt-5 space-x-4">
        <div className="flex flex-col md:flex-row md:items-end gap-3 w-full">
          <Space>
            <RangePicker className="h-[42px] w-full " />
          </Space>
          <select
            id="Categories"
            className="bg-white text-gray-400 h-[42px] w-full md:max-w-[200px] border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
            defaultValue=""
          >
            <option value="" disabled>
              All Categories
            </option>
            <option value="Medications">Medications</option>
            <option value="Medical Supplies">Medical Supplies</option>
            <option value="Equipments">Equipments</option>
            <option value="Office Supplies">Office Supplies</option>
          </select>
          <select
            id="Suppliers"
            className="bg-white text-gray-400 h-[42px] w-full md:max-w-[200px] border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
            defaultValue=""
          >
            <option value="" disabled>
              All Suppliers
            </option>
            <option value="Medicine Industries">Medicine Industries</option>
            <option value="McKcsson">McKcsson</option>
            <option value="Cardinal Health">Cardinal Health</option>
          </select>
          
        </div>

        <div className="w-full md:w-1/3  h-full  ">
          <div className="flex items-center gap-2 bg-white border border-gray-300 rounded px-3 py-2">
            <LiaSearchSolid className="text-gray-500 text-xl" />
            <input
              type="text"
              placeholder="Search Inventory items..."
              className="w-full outline-none text-md"
            />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <InventoryReportCard />
      </div>
      <div className="mt-5">
        <InventoryReportTab />
      </div>
    </div>
  );
};

export default InventoryReport;
