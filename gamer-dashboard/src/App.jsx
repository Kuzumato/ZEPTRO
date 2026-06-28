import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import { Trophy, Gamepad2 } from "lucide-react";

const performanceData = [
  { day: "Mon", score: 40 },
  { day: "Tue", score: 50 },
  { day: "Wed", score: 45 },
  { day: "Thu", score: 60 },
  { day: "Fri", score: 70 },
  { day: "Sat", score: 80 },
  { day: "Sun", score: 95 },
];

const gameData = [
  { name: "ML", value: 40 },
  { name: "DOTA", value: 25 },
  { name: "LoL", value: 20 },
  { name: "COD", value: 15 },
];

const COLORS = ["#3B82F6", "#8B5CF6", "#10B981", "#F59E0B"];

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#020617",
        color: "white",
        padding: "24px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "36px", marginBottom: "24px" }}>
        Gaming Dashboard
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr 1fr",
          gap: "20px",
        }}
      >
        {/* Profile */}
        <div
          style={{
            background: "#0f172a",
            padding: "20px",
            borderRadius: "16px",
          }}
        >
          <h2>User Profile</h2>

          <div style={{ textAlign: "center" }}>
            <img
              src="https://via.placeholder.com/150"
              alt="avatar"
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                marginTop: "20px",
              }}
            />

            <h3>USERNAME</h3>
            <p>Diamond Rank</p>

            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "20px",
              }}
            >
              <div>
                <h2>250</h2>
                <small>Wins</small>
              </div>

              <div>
                <h2>80%</h2>
                <small>Win Rate</small>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              background: "#0f172a",
              padding: "20px",
              borderRadius: "16px",
            }}
          >
            <h2>Improved Past Week</h2>

            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={performanceData}>
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="#3B82F6"
                  strokeWidth={4}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
            }}
          >
            <div
              style={{
                background: "#0f172a",
                padding: "20px",
                borderRadius: "16px",
              }}
            >
              <h3>Match Statistics</h3>
              <p>Total Matches: 1500</p>
              <p>Wins: 1200</p>
              <p>Losses: 300</p>
              <p>KDA: 4.8</p>
            </div>

            <div
              style={{
                background: "#0f172a",
                padding: "20px",
                borderRadius: "16px",
              }}
            >
              <h3>Achievements</h3>

              <p>
                <Trophy size={18} /> Top 100 Player
              </p>
              <p>
                <Trophy size={18} /> 1000 Wins
              </p>
              <p>
                <Trophy size={18} /> MVP Champion
              </p>
            </div>
          </div>
        </div>

        {/* Games */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              background: "#0f172a",
              padding: "20px",
              borderRadius: "16px",
            }}
          >
            <h2>Game Distribution</h2>

            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={gameData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label
                >
                  {gameData.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div
            style={{
              background: "#0f172a",
              padding: "20px",
              borderRadius: "16px",
            }}
          >
            <h2>Games</h2>

            {["ML", "DOTA 2", "League of Legends", "COD Mobile"].map(
              (game) => (
                <div
                  key={game}
                  style={{
                    background: "#1e293b",
                    padding: "10px",
                    borderRadius: "10px",
                    marginBottom: "10px",
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                  }}
                >
                  <Gamepad2 size={18} />
                  {game}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}