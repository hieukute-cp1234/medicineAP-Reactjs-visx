import { Descriptions } from "antd";
import PropTypes from "prop-types";

const DescriptionProfile = (props) => {
  const { title, profile } = props;
  return (
    <Descriptions title={title}>
      <Descriptions.Item span={3} label="name">
        {profile.name || ""}
      </Descriptions.Item>
      <Descriptions.Item span={3} label="Telephone">
        {profile.phone || ""}
      </Descriptions.Item>
      <Descriptions.Item span={3} label="Email">
        {profile.email || ""}
      </Descriptions.Item>
      <Descriptions.Item span={3} label="The Company">
        {profile.company || ""}
      </Descriptions.Item>
      <Descriptions.Item span={3} label="Address">
        {profile.address || ""}
      </Descriptions.Item>
    </Descriptions>
  );
};

DescriptionProfile.propTypes = {
  title: PropTypes.string,
  profile: PropTypes.object,
};

export default DescriptionProfile;
