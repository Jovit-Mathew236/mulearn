import { RightArrow, ThreeDotssvg } from "../assets/svg";

type Props = {};

const LcDashboard = (props: Props) => {
    return (
        <div>
            <div>
                <div>
                    <h1>UX world</h1>
                    <h3>LBS Institute of Technology for Women Code: LBT</h3>
                </div>
                <div>
                    <div>
                        <h3>RANK</h3>
                        <h1>3</h1>
                        <h3>4.68K Karma</h3>
                    </div>
                    <button>
                        <ThreeDotssvg />
                    </button>
                </div>
            </div>
            <div>
                <button>Dashboard</button>
                <button>IG Progress</button>
                <button>BeWeb.dev</button>
            </div>
            <div>
                <div>
                    <button>Meet</button>
                    <button>Team</button>
                    <button>+</button>
                </div>
                <div>
                    <div></div>
                    <div>
                        <p>Your past meetings</p>
                        <div>
                            <HistoryDiv />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LcDashboard;

export const HistoryDiv = () => {
    return (
        <div>
            <div>
                <p>1.</p>
                <p>22 Sunday 2023</p>
            </div>
            <div>
              <p>12.03pm</p>
              <button><RightArrow /></button>
            </div>
        </div>
    );
};
