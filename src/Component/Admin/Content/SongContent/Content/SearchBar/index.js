import AddSong from "./AddSong";
import SearchBar from "./Search";
import { Button, Col, Row } from "antd";

const TopSider = () => {
  return (
      <Row gutter={5}>
        <Col span={4}>
        <AddSong />
        </Col>
        <Col span={16}>
          <SearchBar/>
        </Col>  
        
      </Row>
  );
};

export default TopSider;
