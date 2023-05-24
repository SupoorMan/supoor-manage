import {
    LeftOutlined, RightOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate, useRoutes } from 'react-router-dom';
import H5 from '../H5/H5';
import Homes from '../Home/Home';
import './Layout.scss';
import { $mw } from '../../api/LayoutApi';

const { Header, Sider, Content } = Layout;

const routeConfig = [{
    path: "/home",
    element: <Homes />
}, {
    path: "/h5",
    element: <H5 />
},
]

const Framework = () => {
    const element = useRoutes(routeConfig)

    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const click_menu = (e) => {
        navigate(e.key)
        sessionStorage.setItem('cr', e.key)
    }

    //const [personState, setPersonState] = useState({ name: 'zhangsan', age: 22 })

    useEffect(() => {
        return () => {
            $mw()

            let cr = sessionStorage.getItem('cr')
            if (cr != null) {
                console.log("跳转:" + cr)
                navigate(cr)
            }
        }
    }, [collapsed])

    return (
        <Layout className='lay-box'>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo-box">
                    <span className="logos">Ango</span>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    onClick={click_menu}
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '/layout/home',
                            icon: <UserOutlined />,
                            label: '菜单1'
                        },
                        {
                            key: '/layout/h5',
                            icon: <VideoCameraOutlined />,
                            label: '菜单2'
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined />,
                            label: '菜单3',
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}>
                    <Button
                        type="text"
                        icon={collapsed ? <RightOutlined /> : <LeftOutlined />}
                        onClick={() => {
                            setCollapsed(!collapsed)
                        }}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    {element}
                </Content>
            </Layout>
        </Layout>
    );
};
export default Framework;