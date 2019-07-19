import { IConfigurationService } from './IConfigurationService.interface';
import { ConfigurationType } from '../schedules/model/Configuration.type';

export class HardcodeConfigurationService implements IConfigurationService {
  getConfiguration(channelId: string): ConfigurationType {
    if (channelId === '@avbrestdev' || channelId === '@avbrest') {
      return {
        url: 'https://av.brest.by/prigorod.htm',
        firstRoute: 1,
        lastRoute: 999,

        xPathRoutes: '//table//table//td[1]',
        xPathPlatforms: '//table//table//td[2]',
        xPathRegularities: '//table//table//td[3]',
        xPathDepartmentAS: '//table//table//td[4]',
        xPathDepartmentTU: '//table//table//td[5]',
        xPathArrival: '//table//table//td[6]',
        xPathDepartmentBack: '//table//table//td[7]',
        xPathArrivalBack: '//table//table//td[8]',
      };
    }

    if (channelId === '@dvvsbrestdev' || channelId === '@dvvsbrest') {
      return {
        url: 'http://brest-dvvs.by/sched/',
        firstTime: 1,
        lastTime: 20,
        timeShift: 2,

        xPathTitle: '//font//b',
        xPathSubTitle: '//font[contains(@size, "5")]',
        xPathAdditionalInfo: '',
        xPathTimesStart: '//td[1]',
        xPathSessions: '//td[2]',
        xPathTracks: Array.from({ length: 7 }, (_: never, index) => `//td[${index + 3}]`),
      };
    }

    return {
      url: 'http://brest-hockey.by/',
      days: 10,

      xPathTitle: '//h5//strong',
      xPathSubTitle: '//h5//footer',
      xPathAdditionalInfo: '',
      xPathDates: '//td[1]',
      xPathDaysOfWeek: '//td[2]',
      xPathTimesLines: '//td[3]',
    };
  }
}
