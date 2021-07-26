import { Descriptions } from "antd";
import PropTypes from "prop-types";

const DescriptionProfile = (props) => {
  const { title, profile, label } = props;
  return (
    <Descriptions title={title}>
      <Descriptions.Item span={3} label={label.name}>
        {profile.name}
      </Descriptions.Item>
      <Descriptions.Item span={3} label={label.phone}>
        {profile.phone}
      </Descriptions.Item>
      <Descriptions.Item span={3} label={label.email}>
        {profile.email}
      </Descriptions.Item>
      <Descriptions.Item span={3} label={label.company}>
        {profile.company}
      </Descriptions.Item>
      <Descriptions.Item span={3} label={label.address}>
        {profile.address}
      </Descriptions.Item>
    </Descriptions>
  );
};

DescriptionProfile.propTypes = {
  title: PropTypes.string,
  profile: PropTypes.object,
  label: PropTypes.object,
};

export default DescriptionProfile;
