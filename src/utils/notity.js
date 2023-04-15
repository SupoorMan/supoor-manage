import { SmileOutlined } from '@ant-design/icons';
import { notification } from 'antd';

const openNotifiy = (message, description) => {
    notification.open({
        message,
        description,
        duration: 1.5,
        onClick: () => {
            console.log('Notification Clicked!');
        },
    });
};

export default openNotifiy;