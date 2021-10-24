import "./FightChart.scss";
import { asPercentage, msToTime } from "../utils";

export function FightChart(props) {
    const {fights, raidTime, fightIds} = props;

    const maxWidth = 1000;

    let timeToPixel = (time) => {
        return (time / raidTime) * maxWidth;
    };

    let getClassName = (fight) => {
        if (fight.boss === 0) {
            return "trash";
        }

        if (fight.kill) {
            return "boss-kill";
        }

        return "boss-wipe";
    };

    let fightBands = [];

    fights.forEach((fight, index, array) => {
        if (index !== 0) {
            fightBands.push({ start: timeToPixel(array[index-1].end_time), end: timeToPixel(fight.start_time), cssClass: "idle", id: 10000 + index});
        }

        fightBands.push({start: timeToPixel(fight.start_time), end: timeToPixel(fight.end_time), cssClass: getClassName(fight), id: fight.id});
    })

    let fightSummary = fights.reduce((agg, fight) => {
        if (fight.boss === 0) {
            agg.trash += (fight.end_time - fight.start_time);
            return agg;
        }

        if (fight.kill) {
            agg.bossKill += (fight.end_time - fight.start_time);
            return agg;
        }

        agg.bossWipe += (fight.end_time - fight.start_time);

        return agg;

    }, { trash: 0, bossKill: 0, bossWipe: 0});
    fightSummary.idle = raidTime - fightSummary.trash - fightSummary.bossKill - fightSummary.bossWipe;

    return (
        <div className="fightChart">
            <div className="fightSummary">
                <table>
                    <tbody>
                        <tr className="boss-kill">
                            <th className="name">Boss Kills</th>
                            <td className="time">{msToTime(fightSummary.bossKill)}</td>
                            <td className="percentage">{asPercentage(fightSummary.bossKill / raidTime, 1)}</td>
                        </tr>
                        <tr className="boss-wipe">
                            <th className="name">Boss Wipes</th>
                            <td className="time">{msToTime(fightSummary.bossWipe)}</td>
                            <td className="percentage">{asPercentage(fightSummary.bossWipe / raidTime, 1)}</td>
                        </tr>
                        <tr className="trash">
                            <th className="name">Trash</th>
                            <td className="time">{msToTime(fightSummary.trash)}</td>
                            <td className="percentage">{asPercentage(fightSummary.trash / raidTime, 1)}</td>
                        </tr>
                        <tr className="idle">
                            <th className="name">Idle</th>
                            <td className="time">{msToTime(fightSummary.idle)}</td>
                            <td className="percentage">{asPercentage(fightSummary.idle / raidTime, 1)}</td>
                        </tr>
                        <tr className="total">
                            <th>&nbsp;</th>
                            <td className="time">{msToTime(raidTime)}</td>
                            <td className="percentage">100.0%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <svg width={maxWidth} height="110">
                <g>
                    {fightBands.map(band => {
                        return <rect key={band.id} x={band.start} y={fightIds.includes(band.id) ? "0" : "10"} height="65" width={band.end - band.start} className={band.cssClass} />
                    })}
                </g>
                <g>
                    { fightSummary.bossKill > 0 && (
                        <>
                        <rect x="0" y="85" height="25" width={timeToPixel(fightSummary.bossKill)} className="boss-kill" />
                        </>
                    )}
                    { fightSummary.bossWipe > 0 && (
                        <>
                        <rect x={timeToPixel(fightSummary.bossKill)} y="85" height="25" width={timeToPixel(fightSummary.bossWipe)} className="boss-wipe" />
                        </>
                    )}
                    { fightSummary.trash > 0 && (
                        <>
                        <rect x={timeToPixel(fightSummary.bossKill + fightSummary.bossWipe)} y="85" height="25" width={timeToPixel(fightSummary.trash)} className="trash" />
                        </>
                    )}
                    { fightSummary.idle > 0 && (
                        <>
                        <rect x={timeToPixel(fightSummary.bossKill + fightSummary.bossWipe + fightSummary.trash)} y="85" height="25" width={timeToPixel(fightSummary.idle)} className="idle" />
                        </>
                    )}
                    
                </g>
            </svg>
        </div>
    )
}