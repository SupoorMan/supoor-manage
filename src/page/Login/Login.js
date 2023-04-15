import React from "react";
import './Login.scss';
import './Column.scss';
import { Card, Avatar, Col, Row, Button, Checkbox, Form, Input } from 'antd';
import { $login } from '../../api/LoginApi'


export default function Login(params) {
    return (
        <div className="contain">
            <div className="light-column"></div>
            <div className="light-column-yellow"></div>
            <div className="light-column-red"></div>
            <div className="light-column-orange"></div>
            <div className="light-column-green"></div>
            <div className="light-column-white"></div>
            <div className="light-column-pink"></div>
            <div className="light-column-grey"></div>
            <div className="light-column-black"></div>
            <div className="light-column-orange2"></div>
            <div className="light-column0"></div>
            <div className="light-column1"></div>
            <div className="light-column2"></div>
            <div className="light-column3"></div>
            <div className="logo one">案例 · 数据平台</div>
            <div className="bottom-title">Poor Center@Ango</div>
            <div className="bottom-title-other">{bottomTitleOther}</div>
            <Card
                title={
                    <Row align={"middle"}>
                        <Col span={12}>
                            <Avatar size={36} src="./fish.png" draggable="false" />
                        </Col>
                        <Col span={12} className="move-disable">???</Col>
                    </Row>
                }
                extra={<Row className="qr">
                    <span className="move-disable">⛔</span>
                </Row>}
                style={{
                    width: 500,
                    //background: "#356170d6"
                }}
                headStyle={{
                    color: "#FFFFFF",
                }}
                bodyStyle={{
                }}
            >
                <Form name="Login"
                    labelCol={{ span: 7 }}
                    wrapperCol={{ span: 12 }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: false,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="用 户"
                        name="uname"
                        className="move-disable"
                        rules={[
                            {
                                required: true,
                                message: '请输入用户名!',
                            },
                        ]}
                    >
                        <Input placeholder="手机号\邮箱\用户名" allowClear className="base-input" />
                    </Form.Item>

                    <Form.Item
                        label="密 钥"
                        className="move-disable"
                        name="pwd"
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
                                offset: 12,
                                span: 12,
                            }}
                        >
                            <Checkbox>
                                <span className="move-disable">🔞</span>
                            </Checkbox>
                        </Form.Item></Col>
                        <Col span={12}><Form.Item
                            name="remember1"
                            valuePropName="checked"
                            wrapperCol={{
                                offset: 7,
                                span: 12,
                            }}
                        >
                            <Checkbox>
                                <span className="move-disable">🐾</span>
                            </Checkbox>
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



const bottomTitleOther = "废品 | 书籍 | 旧车 | 相亲 | 外卖 | 抢票 | 软件 | 硬件 | 电子 | 快递 | 求职 | 陪玩 | 接娃 | 开锁 | 修理 | 看门 | 教育 | 摸奖 | 拼单 | 种地 | 卖菜"
const onFinish = (values) => {
    $login(values)
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
