## Transfer 组件示例
### 基本用法
最基本的用法，展示了 `dataSource`、`targetKeys`、每行的渲染函数 `render` 以及回调函数 `onChange` `onSelectChange` `onScroll` 的用法。

```tsx
import React, { useState } from 'react';
import { Transfer } from 'antd';
import type { TransferProps } from 'antd';
interface RecordType {
  key: string;
  title: string;
  description: string;
}
const mockData = Array.from({ length: 20 }).map<RecordType>((_, i) => ({
  key: i.toString(),
  title: `content${i + 1}`,
  description: `description of content${i + 1}`,
}));
const initialTargetKeys = mockData.filter((item) => Number(item.key) > 10).map((item) => item.key);
const App: React.FC = () => {
  const [targetKeys, setTargetKeys] = useState<TransferProps['targetKeys']>(initialTargetKeys);
  const [selectedKeys, setSelectedKeys] = useState<TransferProps['targetKeys']>([]);
  const onChange: TransferProps['onChange'] = (nextTargetKeys, direction, moveKeys) => {
    console.log('targetKeys:', nextTargetKeys);
    console.log('direction:', direction);
    console.log('moveKeys:', moveKeys);
    setTargetKeys(nextTargetKeys);
  };
  const onSelectChange: TransferProps['onSelectChange'] = (
    sourceSelectedKeys,
    targetSelectedKeys,
  ) => {
    console.log('sourceSelectedKeys:', sourceSelectedKeys);
    console.log('targetSelectedKeys:', targetSelectedKeys);
    setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
  };
  const onScroll: TransferProps['onScroll'] = (direction, e) => {
    console.log('direction:', direction);
    console.log('target:', e.target);
  };
  return (
    <Transfer
      dataSource={mockData}
      titles={['Source', 'Target']}
      targetKeys={targetKeys}
      selectedKeys={selectedKeys}
      onChange={onChange}
      onSelectChange={onSelectChange}
      onScroll={onScroll}
      render={(item) => item.title}
    />
  );
};
export default App;
```
### 单向样式
通过 `oneWay` 将 Transfer 转为单向样式。

```tsx
import React, { useState } from 'react';
import { Switch, Transfer } from 'antd';
import type { TransferProps } from 'antd';
interface RecordType {
  key: string;
  title: string;
  description: string;
  disabled: boolean;
}
const mockData = Array.from({ length: 20 }).map<RecordType>((_, i) => ({
  key: i.toString(),
  title: `content${i + 1}`,
  description: `description of content${i + 1}`,
  disabled: i % 3 < 1,
}));
const oriTargetKeys = mockData.filter((item) => Number(item.key) % 3 > 1).map((item) => item.key);
const App: React.FC = () => {
  const [targetKeys, setTargetKeys] = useState<React.Key[]>(oriTargetKeys);
  const [selectedKeys, setSelectedKeys] = useState<React.Key[]>([]);
  const [disabled, setDisabled] = useState(false);
  const handleChange: TransferProps['onChange'] = (newTargetKeys, direction, moveKeys) => {
    setTargetKeys(newTargetKeys);
    console.log('targetKeys: ', newTargetKeys);
    console.log('direction: ', direction);
    console.log('moveKeys: ', moveKeys);
  };
  const handleSelectChange: TransferProps['onSelectChange'] = (
    sourceSelectedKeys,
    targetSelectedKeys,
  ) => {
    setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
    console.log('sourceSelectedKeys: ', sourceSelectedKeys);
    console.log('targetSelectedKeys: ', targetSelectedKeys);
  };
  const handleScroll: TransferProps['onScroll'] = (direction, e) => {
    console.log('direction:', direction);
    console.log('target:', e.target);
  };
  const handleDisable = (checked: boolean) => {
    setDisabled(checked);
  };
  return (
    <>
      <Transfer
        dataSource={mockData}
        titles={['Source', 'Target']}
        targetKeys={targetKeys}
        selectedKeys={selectedKeys}
        onChange={handleChange}
        onSelectChange={handleSelectChange}
        onScroll={handleScroll}
        render={(item) => item.title}
        disabled={disabled}
        oneWay
        style={{ marginBottom: 16 }}
      />
      <Switch
        unCheckedChildren="disabled"
        checkedChildren="disabled"
        checked={disabled}
        onChange={handleDisable}
      />
    </>
  );
};
export default App;
```
### 带搜索框
带搜索框的穿梭框，可以自定义搜索函数。

```tsx
import React, { useEffect, useState } from 'react';
import { Transfer } from 'antd';
import type { TransferProps } from 'antd';
interface RecordType {
  key: string;
  title: string;
  description: string;
  chosen: boolean;
}
const App: React.FC = () => {
  const [mockData, setMockData] = useState<RecordType[]>([]);
  const [targetKeys, setTargetKeys] = useState<TransferProps['targetKeys']>([]);
  const getMock = () => {
    const tempTargetKeys = [];
    const tempMockData = [];
    for (let i = 0; i < 20; i++) {
      const data = {
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        chosen: i % 2 === 0,
      };
      if (data.chosen) {
        tempTargetKeys.push(data.key);
      }
      tempMockData.push(data);
    }
    setMockData(tempMockData);
    setTargetKeys(tempTargetKeys);
  };
  useEffect(() => {
    getMock();
  }, []);
  const filterOption = (inputValue: string, option: RecordType) =>
    option.description.indexOf(inputValue) > -1;
  const handleChange: TransferProps['onChange'] = (newTargetKeys) => {
    setTargetKeys(newTargetKeys);
  };
  const handleSearch: TransferProps['onSearch'] = (dir, value) => {
    console.log('search:', dir, value);
  };
  return (
    <Transfer
      dataSource={mockData}
      showSearch
      filterOption={filterOption}
      targetKeys={targetKeys}
      onChange={handleChange}
      onSearch={handleSearch}
      render={(item) => item.title}
    />
  );
};
export default App;
```
### 高级用法
穿梭框高级用法，可配置操作文案，可定制宽高，可对底部进行自定义渲染。

```tsx
import React, { useEffect, useState } from 'react';
import { Button, Transfer } from 'antd';
import type { TransferProps } from 'antd';
interface RecordType {
  key: string;
  title: string;
  description: string;
  chosen: boolean;
}
const App: React.FC = () => {
  const [mockData, setMockData] = useState<RecordType[]>([]);
  const [targetKeys, setTargetKeys] = useState<TransferProps['targetKeys']>([]);
  const getMock = () => {
    const tempTargetKeys = [];
    const tempMockData = [];
    for (let i = 0; i < 20; i++) {
      const data = {
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        chosen: i % 2 === 0,
      };
      if (data.chosen) {
        tempTargetKeys.push(data.key);
      }
      tempMockData.push(data);
    }
    setMockData(tempMockData);
    setTargetKeys(tempTargetKeys);
  };
  useEffect(() => {
    getMock();
  }, []);
  const handleChange: TransferProps['onChange'] = (newTargetKeys) => {
    setTargetKeys(newTargetKeys);
  };
  const renderFooter: TransferProps['footer'] = (_, info) => {
    if (info?.direction === 'left') {
      return (
        <Button
          size="small"
          style={{ display: 'flex', margin: 8, marginInlineEnd: 'auto' }}
          onClick={getMock}
        >
          Left button reload
        </Button>
      );
    }
    return (
      <Button
        size="small"
        style={{ display: 'flex', margin: 8, marginInlineStart: 'auto' }}
        onClick={getMock}
      >
        Right button reload
      </Button>
    );
  };
  return (
    <Transfer
      dataSource={mockData}
      showSearch
      listStyle={{
        width: 250,
        height: 300,
      }}
      operations={['to right', 'to left']}
      targetKeys={targetKeys}
      onChange={handleChange}
      render={(item) => `${item.title}-${item.description}`}
      footer={renderFooter}
    />
  );
};
export default App;
```
### 自定义渲染行数据
自定义渲染每一个 Transfer Item，可用于渲染复杂数据。

```tsx
import React, { useEffect, useState } from 'react';
import { Transfer } from 'antd';
import type { TransferProps } from 'antd';
interface RecordType {
  key: string;
  title: string;
  description: string;
  chosen: boolean;
}
const App: React.FC = () => {
  const [mockData, setMockData] = useState<RecordType[]>([]);
  const [targetKeys, setTargetKeys] = useState<React.Key[]>([]);
  const getMock = () => {
    const tempTargetKeys = [];
    const tempMockData = [];
    for (let i = 0; i < 20; i++) {
      const data = {
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        chosen: i % 2 === 0,
      };
      if (data.chosen) {
        tempTargetKeys.push(data.key);
      }
      tempMockData.push(data);
    }
    setMockData(tempMockData);
    setTargetKeys(tempTargetKeys);
  };
  useEffect(() => {
    getMock();
  }, []);
  const handleChange: TransferProps['onChange'] = (newTargetKeys, direction, moveKeys) => {
    console.log(newTargetKeys, direction, moveKeys);
    setTargetKeys(newTargetKeys);
  };
  const renderItem = (item: RecordType) => {
    const customLabel = (
      <span className="custom-item">
        {item.title} - {item.description}
      </span>
    );
    return {
      label: customLabel, // for displayed item
      value: item.title, // for title and filter matching
    };
  };
  return (
    <Transfer
      dataSource={mockData}
      listStyle={{
        width: 300,
        height: 300,
      }}
      targetKeys={targetKeys}
      onChange={handleChange}
      render={renderItem}
    />
  );
};
export default App;
```
### 分页
大数据下使用分页。

```tsx
import React, { useEffect, useState } from 'react';
import { Switch, Transfer } from 'antd';
import type { TransferProps } from 'antd';
interface RecordType {
  key: string;
  title: string;
  description: string;
  chosen: boolean;
}
const App: React.FC = () => {
  const [oneWay, setOneWay] = useState(false);
  const [mockData, setMockData] = useState<RecordType[]>([]);
  const [targetKeys, setTargetKeys] = useState<React.Key[]>([]);
  useEffect(() => {
    const newTargetKeys = [];
    const newMockData = [];
    for (let i = 0; i < 2000; i++) {
      const data = {
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        chosen: i % 2 === 0,
      };
      if (data.chosen) {
        newTargetKeys.push(data.key);
      }
      newMockData.push(data);
    }
    setTargetKeys(newTargetKeys);
    setMockData(newMockData);
  }, []);
  const onChange: TransferProps['onChange'] = (newTargetKeys, direction, moveKeys) => {
    console.log(newTargetKeys, direction, moveKeys);
    setTargetKeys(newTargetKeys);
  };
  return (
    <>
      <Transfer
        dataSource={mockData}
        targetKeys={targetKeys}
        onChange={onChange}
        render={(item) => item.title}
        oneWay={oneWay}
        pagination
      />
      <br />
      <Switch
        unCheckedChildren="one way"
        checkedChildren="one way"
        checked={oneWay}
        onChange={setOneWay}
      />
    </>
  );
};
export default App;
```
### 表格穿梭框
使用 Table 组件作为自定义渲染列表。

```tsx
import React, { useState } from 'react';
import { Flex, Switch, Table, Tag, Transfer } from 'antd';
import type { GetProp, TableColumnsType, TableProps, TransferProps } from 'antd';
type TransferItem = GetProp<TransferProps, 'dataSource'>[number];
type TableRowSelection<T extends object> = TableProps<T>['rowSelection'];
interface DataType {
  key: string;
  title: string;
  description: string;
  tag: string;
}
interface TableTransferProps extends TransferProps<TransferItem> {
  dataSource: DataType[];
  leftColumns: TableColumnsType<DataType>;
  rightColumns: TableColumnsType<DataType>;
}
// Customize Table Transfer
const TableTransfer: React.FC<TableTransferProps> = (props) => {
  const { leftColumns, rightColumns, ...restProps } = props;
  return (
    <Transfer style={{ width: '100%' }} {...restProps}>
      {({
        direction,
        filteredItems,
        onItemSelect,
        onItemSelectAll,
        selectedKeys: listSelectedKeys,
        disabled: listDisabled,
      }) => {
        const columns = direction === 'left' ? leftColumns : rightColumns;
        const rowSelection: TableRowSelection<TransferItem> = {
          getCheckboxProps: () => ({ disabled: listDisabled }),
          onChange(selectedRowKeys) {
            onItemSelectAll(selectedRowKeys, 'replace');
          },
          selectedRowKeys: listSelectedKeys,
          selections: [Table.SELECTION_ALL, Table.SELECTION_INVERT, Table.SELECTION_NONE],
        };
        return (
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={filteredItems}
            size="small"
            style={{ pointerEvents: listDisabled ? 'none' : undefined }}
            onRow={({ key, disabled: itemDisabled }) => ({
              onClick: () => {
                if (itemDisabled || listDisabled) {
                  return;
                }
                onItemSelect(key, !listSelectedKeys.includes(key));
              },
            })}
          />
        );
      }}
    </Transfer>
  );
};
const mockTags = ['cat', 'dog', 'bird'];
const mockData = Array.from({ length: 20 }).map<DataType>((_, i) => ({
  key: i.toString(),
  title: `content${i + 1}`,
  description: `description of content${i + 1}`,
  tag: mockTags[i % 3],
}));
const columns: TableColumnsType<DataType> = [
  {
    dataIndex: 'title',
    title: 'Name',
  },
  {
    dataIndex: 'tag',
    title: 'Tag',
    render: (tag: string) => (
      <Tag style={{ marginInlineEnd: 0 }} color="cyan">
        {tag.toUpperCase()}
      </Tag>
    ),
  },
  {
    dataIndex: 'description',
    title: 'Description',
  },
];
const filterOption = (input: string, item: DataType) =>
  item.title?.includes(input) || item.tag?.includes(input);
const App: React.FC = () => {
  const [targetKeys, setTargetKeys] = useState<TransferProps['targetKeys']>([]);
  const [disabled, setDisabled] = useState(false);
  const onChange: TableTransferProps['onChange'] = (nextTargetKeys) => {
    setTargetKeys(nextTargetKeys);
  };
  const toggleDisabled = (checked: boolean) => {
    setDisabled(checked);
  };
  return (
    <Flex align="start" gap="middle" vertical>
      <TableTransfer
        dataSource={mockData}
        targetKeys={targetKeys}
        disabled={disabled}
        showSearch
        showSelectAll={false}
        onChange={onChange}
        filterOption={filterOption}
        leftColumns={columns}
        rightColumns={columns}
      />
      <Switch
        unCheckedChildren="disabled"
        checkedChildren="disabled"
        checked={disabled}
        onChange={toggleDisabled}
      />
    </Flex>
  );
};
export default App;
```
### 树穿梭框
使用 Tree 组件作为自定义渲染列表。

```tsx
import React, { useState } from 'react';
import { theme, Transfer, Tree } from 'antd';
import type { GetProp, TransferProps, TreeDataNode } from 'antd';
type TransferItem = GetProp<TransferProps, 'dataSource'>[number];
interface TreeTransferProps {
  dataSource: TreeDataNode[];
  targetKeys: TransferProps['targetKeys'];
  onChange: TransferProps['onChange'];
}
// Customize Table Transfer
const isChecked = (selectedKeys: React.Key[], eventKey: React.Key) =>
  selectedKeys.includes(eventKey);
const generateTree = (
  treeNodes: TreeDataNode[] = [],
  checkedKeys: TreeTransferProps['targetKeys'] = [],
): TreeDataNode[] =>
  treeNodes.map(({ children, ...props }) => ({
    ...props,
    disabled: checkedKeys.includes(props.key as string),
    children: generateTree(children, checkedKeys),
  }));
const TreeTransfer: React.FC<TreeTransferProps> = ({
  dataSource,
  targetKeys = [],
  ...restProps
}) => {
  const { token } = theme.useToken();
  const transferDataSource: TransferItem[] = [];
  function flatten(list: TreeDataNode[] = []) {
    list.forEach((item) => {
      transferDataSource.push(item as TransferItem);
      flatten(item.children);
    });
  }
  flatten(dataSource);
  return (
    <Transfer
      {...restProps}
      targetKeys={targetKeys}
      dataSource={transferDataSource}
      className="tree-transfer"
      render={(item) => item.title!}
      showSelectAll={false}
    >
      {({ direction, onItemSelect, selectedKeys }) => {
        if (direction === 'left') {
          const checkedKeys = [...selectedKeys, ...targetKeys];
          return (
            <div style={{ padding: token.paddingXS }}>
              <Tree
                blockNode
                checkable
                checkStrictly
                defaultExpandAll
                checkedKeys={checkedKeys}
                treeData={generateTree(dataSource, targetKeys)}
                onCheck={(_, { node: { key } }) => {
                  onItemSelect(key as string, !isChecked(checkedKeys, key));
                }}
                onSelect={(_, { node: { key } }) => {
                  onItemSelect(key as string, !isChecked(checkedKeys, key));
                }}
              />
            </div>
          );
        }
      }}
    </Transfer>
  );
};
const treeData: TreeDataNode[] = [
  { key: '0-0', title: '0-0' },
  {
    key: '0-1',
    title: '0-1',
    children: [
      { key: '0-1-0', title: '0-1-0' },
      { key: '0-1-1', title: '0-1-1' },
    ],
  },
  { key: '0-2', title: '0-2' },
  { key: '0-3', title: '0-3' },
  { key: '0-4', title: '0-4' },
];
const App: React.FC = () => {
  const [targetKeys, setTargetKeys] = useState<TreeTransferProps['targetKeys']>([]);
  const onChange: TreeTransferProps['onChange'] = (keys) => {
    setTargetKeys(keys);
  };
  return <TreeTransfer dataSource={treeData} targetKeys={targetKeys} onChange={onChange} />;
};
export default App;
```
### 自定义状态
使用 `status` 为 Transfer 添加状态，可选 `error` 或者 `warning`。

```tsx
import React from 'react';
import { Flex, Transfer } from 'antd';
const App: React.FC = () => (
  <Flex gap="middle" vertical>
    <Transfer status="error" />
    <Transfer status="warning" showSearch />
  </Flex>
);
export default App;
```
### 自定义全选文字
自定义穿梭框全选按钮的文字。

```tsx
import React, { useState } from 'react';
import { Transfer } from 'antd';
import type { TransferProps } from 'antd';
interface RecordType {
  key: string;
  title: string;
  description: string;
}
const mockData = Array.from({ length: 10 }).map<RecordType>((_, i) => ({
  key: i.toString(),
  title: `content${i + 1}`,
  description: `description of content${i + 1}`,
}));
const oriTargetKeys = mockData.filter((item) => Number(item.key) % 3 > 1).map((item) => item.key);
const selectAllLabels: TransferProps['selectAllLabels'] = [
  'Select All',
  ({ selectedCount, totalCount }) => `${selectedCount}/${totalCount}`,
];
const App: React.FC = () => {
  const [targetKeys, setTargetKeys] = useState<React.Key[]>(oriTargetKeys);
  return (
    <Transfer
      dataSource={mockData}
      targetKeys={targetKeys}
      onChange={setTargetKeys}
      render={(item) => item.title}
      selectAllLabels={selectAllLabels}
    />
  );
};
export default App;
```
### 组件 Token
Component Token Debug.

```tsx
import React, { useState } from 'react';
import { ConfigProvider, Space, Switch, Table, Tag, Transfer } from 'antd';
import type { GetProp, TableColumnsType, TableProps, TransferProps } from 'antd';
import difference from 'lodash/difference';
type TableRowSelection<T> = TableProps<T>['rowSelection'];
type TransferItem = GetProp<TransferProps, 'dataSource'>[number];
interface RecordType {
  key: string;
  title: string;
  description: string;
  disabled: boolean;
  tag: string;
}
interface DataType {
  key: string;
  title: string;
  description: string;
  disabled: boolean;
  tag: string;
}
interface TableTransferProps extends TransferProps<TransferItem> {
  dataSource: DataType[];
  leftColumns: TableColumnsType<DataType>;
  rightColumns: TableColumnsType<DataType>;
}
// Customize Table Transfer
const TableTransfer = ({ leftColumns, rightColumns, ...restProps }: TableTransferProps) => (
  <Transfer {...restProps}>
    {({
      direction,
      filteredItems,
      onItemSelectAll,
      onItemSelect,
      selectedKeys: listSelectedKeys,
      disabled: listDisabled,
    }) => {
      const columns = direction === 'left' ? leftColumns : rightColumns;
      const rowSelection: TableRowSelection<TransferItem> = {
        getCheckboxProps: (item) => ({ disabled: listDisabled || item.disabled }),
        onSelectAll(selected, selectedRows) {
          const treeSelectedKeys = selectedRows
            .filter((item) => !item.disabled)
            .map(({ key }) => key);
          const diffKeys = selected
            ? difference(treeSelectedKeys, listSelectedKeys)
            : difference(listSelectedKeys, treeSelectedKeys);
          onItemSelectAll(diffKeys as string[], selected);
        },
        onSelect({ key }, selected) {
          onItemSelect(key as string, selected);
        },
        selectedRowKeys: listSelectedKeys,
      };
      return (
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={filteredItems}
          size="small"
          style={{ pointerEvents: listDisabled ? 'none' : undefined }}
          onRow={({ key, disabled: itemDisabled }) => ({
            onClick: () => {
              if (itemDisabled || listDisabled) {
                return;
              }
              onItemSelect(key as string, !listSelectedKeys.includes(key as string));
            },
          })}
        />
      );
    }}
  </Transfer>
);
const mockTags = ['cat', 'dog', 'bird'];
const mockData = Array.from({ length: 20 }).map<RecordType>((_, i) => ({
  key: i.toString(),
  title: `content${i + 1}`,
  description: `description of content${i + 1}`,
  disabled: i % 4 === 0,
  tag: mockTags[i % 3],
}));
const leftTableColumns: TableColumnsType<DataType> = [
  {
    dataIndex: 'title',
    title: 'Name',
  },
  {
    dataIndex: 'tag',
    title: 'Tag',
    render: (tag) => <Tag>{tag}</Tag>,
  },
  {
    dataIndex: 'description',
    title: 'Description',
  },
];
const rightTableColumns: TableColumnsType<DataType> = [
  {
    dataIndex: 'title',
    title: 'Name',
  },
];
const initialTargetKeys = mockData.filter((item) => Number(item.key) > 10).map((item) => item.key);
const App: React.FC = () => {
  const [targetKeys, setTargetKeys] = useState<React.Key[]>(initialTargetKeys);
  const [selectedKeys, setSelectedKeys] = useState<React.Key[]>([]);
  const onChange: TransferProps['onChange'] = (nextTargetKeys, direction, moveKeys) => {
    console.log('targetKeys:', nextTargetKeys);
    console.log('direction:', direction);
    console.log('moveKeys:', moveKeys);
    setTargetKeys(nextTargetKeys);
  };
  const onSelectChange: TransferProps['onSelectChange'] = (
    sourceSelectedKeys,
    targetSelectedKeys,
  ) => {
    console.log('sourceSelectedKeys:', sourceSelectedKeys);
    console.log('targetSelectedKeys:', targetSelectedKeys);
    setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
  };
  const onScroll: TransferProps['onScroll'] = (direction, e) => {
    console.log('direction:', direction);
    console.log('target:', e.target);
  };
  const [disabled, setDisabled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const secondOnChange: TransferProps['onChange'] = (nextTargetKeys) => {
    setTargetKeys(nextTargetKeys);
  };
  const triggerDisable = (checked: boolean) => {
    setDisabled(checked);
  };
  const triggerShowSearch = (checked: boolean) => {
    setShowSearch(checked);
  };
  return (
    <ConfigProvider
      theme={{
        components: {
          Transfer: {
            listWidth: 40,
            listWidthLG: 50,
            listHeight: 30,
            itemHeight: 20,
            itemPaddingBlock: 10,
            headerHeight: 18,
          },
        },
      }}
    >
      <Transfer
        dataSource={mockData}
        titles={['Source', 'Target']}
        targetKeys={targetKeys}
        selectedKeys={selectedKeys}
        onChange={onChange}
        onSelectChange={onSelectChange}
        onScroll={onScroll}
        render={(item) => item.title}
      />
      <Transfer status="error" />
      <Transfer status="warning" showSearch />
      <TableTransfer
        dataSource={mockData}
        targetKeys={targetKeys}
        disabled={disabled}
        showSearch={showSearch}
        onChange={secondOnChange}
        filterOption={(inputValue, item) =>
          item.title!.indexOf(inputValue) !== -1 || item.tag.indexOf(inputValue) !== -1
        }
        leftColumns={leftTableColumns}
        rightColumns={rightTableColumns}
      />
      <Space style={{ marginTop: 16 }}>
        <Switch
          unCheckedChildren="disabled"
          checkedChildren="disabled"
          checked={disabled}
          onChange={triggerDisable}
        />
        <Switch
          unCheckedChildren="showSearch"
          checkedChildren="showSearch"
          checked={showSearch}
          onChange={triggerShowSearch}
        />
      </Space>
    </ConfigProvider>
  );
};
export default App;
```
