import { Menu, Dropdown as ADropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import React from "react";
import { find } from "lodash";

const Dropdown = ({ data = [], value, onItemSelected, placement }) => {
  const handleMenuClick = ({ key }) => {
    onItemSelected(key);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      {data.map((item: { key: string; label: string }) => {
        return <Menu.Item key={`${item.key}`}>{item.label}</Menu.Item>;
      })}
    </Menu>
  );
  const renderSelectedItem = () => {
    const selectedItem = find(
      data,
      (item) => item.key === value?.key || item.key === value
    );
    return selectedItem?.label;
  };
  return (
    <ADropdown
      placement={placement}
      overlay={menu}
      trigger={["click"]}
      getPopupContainer={(trigger: any) => trigger.parentNode}
    >
      <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
        {renderSelectedItem() || data?.[0]?.label} <DownOutlined />
      </a>
    </ADropdown>
  );
};

export default Dropdown;
