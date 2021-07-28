import React, { useState, useEffect } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { Row, Col } from 'antd';
import { getStep } from '../../service/stepConstructive';
import Layout from '../../layout/layout';
import Steps from './Steps';
import Proccess from './Process';
import Modal from './Modal';
import { medicineData } from '../../recoil/atom/index';
import { useRecoilValue } from 'recoil';
import { postProcess } from '../../service/process';
import { style } from './style';

const StepsConstructive = () => {
  const medicine = useRecoilValue(medicineData);
  const [primaryPlan, setPrimaryPlan] = useState([]);
  const [highEndPlan, setHighEndPlan] = useState([]);
  const [isModal, setModal] = useState(false);

  useEffect(() => {
    const getStepData = async () => {
      const step = await getStep();
      setPrimaryPlan(step);
    }
    getStepData();
  }, [])

  const id2List = {
    text: primaryPlan,
    text2: highEndPlan,
  };

  const getList = (id) => id2List[id];

  const dragHandle = (arrStart, arrEnd, idStart, idEnd) => {
    const start = Array.from(arrStart);
    const end = Array.from(arrEnd);
    const [item] = start.splice(idStart.index, 1);
    end.splice(idEnd.index, 0, item);
    const result = {};
    result[idStart.droppableId] = start;
    result[idEnd.droppableId] = end;
    setPrimaryPlan(result?.text);
    setHighEndPlan(result?.text2);
    return result;
  }

  const handleDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;
    if (source.droppableId === destination.droppableId) {
      const item = source.droppableId === 'text' ? primaryPlan : highEndPlan;
      const [renderItem] = item.splice(result.source.index, 1);
      item.splice(result.destination.index, 0, renderItem);
      source.droppableId === 'text' ? setPrimaryPlan(item) : setHighEndPlan(item);
    } else {
      dragHandle(
        getList(source.droppableId),
        getList(destination.droppableId),
        source,
        destination
      )
    }
  };

  const openModal = () => {
    setModal(true);
  };

  const onFinish = async (value) => {
    const item = medicine.filter((item) => item.name === value.medicine);
    const id = item[0]._id;
    const step = [];
    for (let i = 0; i < highEndPlan.length; i++) {
      step.push(highEndPlan[i]._id)
    }
    const newProcess = {
      name: value.name,
      medicine: id,
      step: step,
      status: 1
    }
    await postProcess(newProcess)
  }

  const cancel = () => {
    setModal(false);
  }
    
  return (
    <Layout>
      <Row>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Col span={8} offset={3} style={style().center}>
            <Steps
              data={primaryPlan}
              title='Steps'
              number={primaryPlan.length}
            />
          </Col>
          <Col span={8} offset={3} style={style().center}>
            <Proccess
              data={highEndPlan}
              title='Proccess'
              openModal={openModal}
              number={highEndPlan.length}
            />
          </Col>
        </DragDropContext>
      </Row>
      <Modal
        title='Please add process name and medicine name!'
        isOpen={isModal}
        onFinish={onFinish}
        handleCancel={cancel}
        options={medicine}
      />
      </Layout>
  )
}

export default StepsConstructive;
