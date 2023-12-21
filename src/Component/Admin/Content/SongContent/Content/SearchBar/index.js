import AddSong from "./AddSong";
import SearchBar from "./Search";
import { Col, Row } from "antd";

const TopSider = ({submitSearch}) => {
  return (
      <Row>
        <Col span={4}>
        <AddSong />
        </Col>
        <Col span={16}>
          <SearchBar submitSearch={submitSearch}/>
        </Col>
      </Row>
  );
};

export default TopSider;
