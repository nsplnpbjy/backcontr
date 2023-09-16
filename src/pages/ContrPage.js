// 引入 React 和 axios 库
import React, { useState, useEffect } from "react";
import axios from "axios";
// 引入 antd 的 List、Avatar 和 Spin 组件
import { List, Avatar, Spin } from "antd";

// 定义一个主页组件
function HomePage() {
  // 定义一个状态变量，用来存储从接口获取的数据
  const [data, setData] = useState(null);

  // 定义一个副作用函数，用来在组件挂载时向接口发送请求
  useEffect(() => {
    // 使用 axios 库发送 GET 请求
    axios
      .post("http://127.0.0.1:8092/getRes")
      .then((response) => {
        // 如果请求成功，将响应数据存入状态变量
        setData(response.data);
      })
      .catch((error) => {
        // 如果请求失败，打印错误信息
        console.error(error);
      });
  }, []); // 空数组表示只在组件挂载时执行一次

  // 返回一个 div 元素，其中包含一个标题和列表元素
  return (
    <div style={{backgroundImage:`url(${"back.jpg"})`}}>
      <h1>预约记录</h1>
      {/* 使用 List 组件来渲染列表 */}
      <List
        // 设置列表的数据源为 data.list
        dataSource={data?.list}
        // 设置列表的边框为 true
        bordered={true}
        // 设置列表的网格类型为每行四列
        grid={{ gutter: 16, column: 4 }}
        // 设置列表的加载状态为 data 为空时为 true
        loading={!data}
        // 设置列表的页脚为一个 Spin 组件，表示加载中
        footer={<Spin />}
        // 设置列表的渲染函数为每个 item 返回一个 List.Item 元素
        renderItem={(item) => (
          <List.Item >
            {/* 使用 List.Item.Meta 组件来渲染每个 item 的元信息 */}
            <List.Item.Meta
              style={{color: "white"}} // 添加 style 属性，并设置 color 为 white
              // 设置每个 item 的标题为团名和团期
              title={`${item.GroupName} - ${item.TourTime}`}
              // 设置每个 item 的描述为联系人、联系电话、预约时间和是否完成，并在每个数据之间添加 \t 字符表示制表符
              description={`联系人：${item.ComuName} -------------------- 联系电话：${item.ComuPhoneNumber} -------------------- 预约时间：${item.ResTime} -------------------- 是否完成：${item.IsDone ? "是" : "否"}`}
            />
          </List.Item>
        )}
      />
    </div>
  );
}

// 导出主页组件
export default HomePage;
