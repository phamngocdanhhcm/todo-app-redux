import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch} from 'react-redux';
import { useSelector } from 'react-redux/es/exports';
import { addTodoCreator } from '../../redux/actions';
import { useState } from 'react';
import { searchTextSelector, todoListSelector, todosRemainingSelector } from '../../redux/selector';
// import { todoListReducer } from './todoReducer';
import todoListReducer  from './todoReducer';
export default function TodoList() {
	const [todoName,setTodoName] = useState();
	const [todoPriority,setTodoPriority] = useState();
	const dispatch = useDispatch(); //  Là 1 funtion
	// const todoList = useSelector((state) => state.todoList);
	const todoFilterList = useSelector(todosRemainingSelector);

	const handleAddButtonClick = () => {
		// event handle
		// dispatch để truyền action
		dispatch(todoListReducer.actions.addTodoCreator({
			id: 4,
			name:todoName,
			prioriry:todoPriority,
			completed:false
		}))
	}

	const handleInputChange = (e) => {
		setTodoName(e.target.value)
	}

	const handlePriorityChange = (value) => {
		setTodoPriority(value)
	}
	return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {/* <Todo name='Learn React' prioriry='High' />
        <Todo name='Learn Redux' prioriry='Medium' />
        <Todo name='Learn JavaScript' prioriry='Low' /> */}
		{todoFilterList.map(x=>( <Todo name={x.name} prioriry={x.prioriry} />))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={handleInputChange} />
          <Select defaultValue="Medium" onChange={handlePriorityChange}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
