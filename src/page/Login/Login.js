import React from "react";
import './Login.scss';
import { Card, Space, Tag, Avatar, Col, Row, Button, Checkbox, Form, Input } from 'antd';


export default function Login(params) {
    return (
        <div className="contain">
            <div className="desroct"></div>
            <div className="desroct1"></div>
            <Card
                title={
                    <Row align={"middle"}>
                        <Col span={12}>
                            <Avatar size={36} src="./fish.png" draggable="false" />
                        </Col>
                        <Col span={12}>Ango</Col>
                    </Row>
                }
                extra={<Row className="qr">
                    ⛔
                </Row>}
                style={{
                    width: 500,
                }}
                headStyle={{
                    color: "#FFFFFF"
                }}
                bodyStyle={{
                    //color:"#FFFFFF"
                }}
            >
                <Form name="Login"
                    labelCol={{ span: 7 }}
                    wrapperCol={{ span: 12 }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="用 户"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: '请输入用户名!',
                            },
                        ]}
                    >
                        <Input placeholder="手机号\账号\用户名" className="base-input" />
                    </Form.Item>

                    <Form.Item
                        label="密 码"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: '请输入密码!',
                            },
                        ]}
                    >
                        <Input.Password placeholder="密码\邀请码" className="base-input" />
                    </Form.Item>

                    <Row>
                        <Col span={12}><Form.Item
                            name="remember"
                            valuePropName="checked"
                            wrapperCol={{
                                offset: 8,
                                span: 12,
                            }}
                        >
                            <Checkbox>🔞</Checkbox>
                        </Form.Item></Col>
                        <Col span={12}><Form.Item
                            name="remember1"
                            valuePropName="checked"
                            wrapperCol={{
                                offset: 5,
                                span: 12,
                            }}
                        >
                            <Checkbox>🆗</Checkbox>
                        </Form.Item></Col>
                    </Row>

                    <Row>
                        <Col span={12}><Form.Item
                            wrapperCol={{
                                offset: 12,
                                span: 4,
                            }}
                        >
                            <Button type="primary" htmlType="submit" ghost>
                                登录
                            </Button>
                        </Form.Item></Col>
                        <Col span={12}><Form.Item
                            wrapperCol={{
                                offset: 2,
                                span: 4,
                            }}
                        >
                            <Button type="primary" danger ghost>
                                忘记密码
                            </Button>
                        </Form.Item></Col>
                    </Row>

                </Form>
            </Card>
        </div>
    )
}

const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};