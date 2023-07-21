import { formatInTimeZone } from "date-fns-tz";
import { type ConverterDTO } from "../domain/models/ConverterDTO";

export class ConverterTimeUseCase {
  async run(props: ConverterDTO): Promise<string> {
    try {
      const { dateTime, nextZone } = props;
      if (!dateTime) throw Error("DateTime is required");
      if (!nextZone) throw Error("NextZone is required");
      const date = new Date(dateTime);

      return formatInTimeZone(date, nextZone, "yyyy-MM-dd hh:mm:ss zzz");
    } catch {
      throw Error("Sorry, the operation could not be performed");
    }
  }
}
