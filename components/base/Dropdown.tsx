import { Menu, Dropdown as ADropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import React from "react";

const Dropdown = ({ data = [], value, onItemSelected, placement }) => {
  const handleMenuClick = (data) => onItemSelected?.(data);
  console.log(data, "data");
  const menu = (
    <Menu onClick={handleMenuClick}>
      {data.map((item: { key: string; label: string }) => {
        return <Menu.Item key={`${item.key}`}>{item.label}</Menu.Item>;
      })}
    </Menu>
  );
  return (
    <ADropdown
      placement={placement}
      overlay={menu}
      trigger={["click"]}
      getPopupContainer={(trigger: any) => trigger.parentNode}
    >
      <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
        {(value && value.label) || data?.[0]?.label} <DownOutlined />
      </a>
    </ADropdown>
  );
};

export default Dropdown;
