import client from 'api/client';
import enums from '@/consts/enums';

const uniqueIdentifier = '9F673AF145A5442A9A3A9B60C463A55A';

const getPressReleases = (params) => {
  const {
    startDate,
    endDate,
    pageSize = 50,
    pageIndex = 1,
    tags,
    detailLevel = enums.detailLevelEnum.medium,
    SearchTerm,
  } = params;

  return client.get(`NewsFeed/${uniqueIdentifier}`, {
    params: {
      startDate,
      endDate,
      pageSize,
      pageIndex,
      tags,
      detailLevel,
      SearchTerm,
    },
  });
};

export default { getPressReleases };
