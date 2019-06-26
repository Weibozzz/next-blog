import {
  Spin
} from 'antd'
const loading = () =>{
  return (
    <div style={{position: 'fixed', left: '50%', top: '20%', transform: 'translateX(-50%)', zIndex: 10}}>
      <Spin tip="Loading..."></Spin>
    </div>
  );
};
export default loading;
