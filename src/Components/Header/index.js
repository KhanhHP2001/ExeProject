import { Badge, Image, Space, Typography} from "antd";
import { MailOutlined, BellFilled } from '@ant-design/icons';

function Header() {
    return (
    <div className="Header">
        <Image 
            width={40}
            src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/348637701_604160681673424_9086670294269807628_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=IANzyoyZjLsAX8jJKVS&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfB54bk4nPP4sqcMA8IG3CcIezlfXnAAVut0ectLoso9XA&oe=647065E2"
            style={{borderRadius: "5px"}}
        ></Image>
        <Typography.Title>XPANDIT-HR</Typography.Title>
        <Space>
        <Badge count={10} dot>
            <MailOutlined style={{fontSize: "24px"}}/>
        </Badge>
        <Badge count={20}>
            <BellFilled style={{fontSize: "24px"}}/>
        </Badge>
            
        </Space>
    </div>

    )
}
export default Header