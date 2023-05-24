// import { SmileOutlined } from '@ant-design/icons';
import { notification } from 'antd';

const openNotifiy = (message, description) => {
    notification.open({
        message,
        description,
        duration: 2,
        onClick: () => {
            console.log('');
        },
    });
};

export default openNotifiy;