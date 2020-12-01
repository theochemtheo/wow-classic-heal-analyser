import {Component} from "react";
import {FightReport} from "./FightReport";
import {LogLoader} from "./warcraftLogLoader";

export class HealerReport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            fights: [],
            characters: {},
            pets: {},
            isLoaded: false,
            reportId: props.reportId
        }
    }

    componentDidMount() {
        const { reportId } = this.state;
        if (!reportId)
            return;

        LogLoader.getFights()
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    fights: result.fights,
                    characters: result.friendlies.reduce((acc, obj) => {
                        let id = obj["id"];
                        if (!acc[id]) {
                            acc[id] = obj;
                        }

                        return acc;
                    }, {}),
                    pets: result.friendlyPets.reduce((acc, obj) => {
                        let id = obj["id"];
                        if (!acc[id]) {
                            acc[id] = obj;
                        }

                        return acc;
                    })
                })
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error: error
                })
            }

        );
    }

    render() {
        const { error, isLoaded, fights, reportId, characters, pets} = this.state;
        const {showTrash} = this.props;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading ...</div>;
        } else {
            return (
                <>
                {fights.filter(x => showTrash || x.boss !== 0).map(item => (
                    <FightReport key={item.id} fight={item} characters={characters} pets={pets} reportId={reportId} />
                ))}
                </>
            )
        }
    }
}