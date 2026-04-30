// Chart.js Global Configuration
Chart.defaults.color = "#94a3b8";
Chart.defaults.borderColor = "rgba(148, 163, 184, 0.1)";
Chart.defaults.font.family =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif";
Chart.defaults.font.size = 12;
Chart.defaults.font.weight = "500";

// Dashboard Chart
if (document.getElementById("dashboardChart")) {
  const ctx = document.getElementById("dashboardChart").getContext("2d");
  const gradient = ctx.createLinearGradient(0, 0, 0, 300);
  gradient.addColorStop(0, "rgba(99, 102, 241, 0.3)");
  gradient.addColorStop(1, "rgba(99, 102, 241, 0)");

  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      datasets: [
        {
          label: "Revenue",
          data: [2000, 4000, 3000, 5000, 7000],
          borderColor: "#6366f1",
          backgroundColor: gradient,
          borderWidth: 3,
          fill: true,
          tension: 0.4,
          pointRadius: 6,
          pointBackgroundColor: "#6366f1",
          pointBorderColor: "#0f172a",
          pointBorderWidth: 2,
          pointHoverRadius: 8,
          pointHoverBackgroundColor: "#8b5cf6",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        intersect: false,
        mode: "index",
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          backgroundColor: "rgba(15, 23, 42, 0.8)",
          titleColor: "#f1f5f9",
          bodyColor: "#e2e8f0",
          borderColor: "rgba(99, 102, 241, 0.3)",
          borderWidth: 1,
          padding: 12,
          displayColors: false,
          callbacks: {
            label: function (context) {
              return "$" + context.parsed.y.toLocaleString();
            },
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function (value) {
              return "$" + (value / 1000).toFixed(0) + "k";
            },
          },
          grid: {
            color: "rgba(148, 163, 184, 0.05)",
            drawBorder: false,
          },
        },
        x: {
          grid: {
            display: false,
            drawBorder: false,
          },
        },
      },
    },
  });
}

// Analytics Chart
if (document.getElementById("analyticsChart")) {
  const ctx = document.getElementById("analyticsChart").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Direct", "Social", "Search"],
      datasets: [
        {
          label: "Traffic",
          data: [500, 300, 700],
          backgroundColor: [
            "rgba(99, 102, 241, 0.8)",
            "rgba(139, 92, 246, 0.8)",
            "rgba(168, 85, 247, 0.8)",
          ],
          borderColor: [
            "rgba(99, 102, 241, 1)",
            "rgba(139, 92, 246, 1)",
            "rgba(168, 85, 247, 1)",
          ],
          borderWidth: 0,
          borderRadius: 8,
          hoverBackgroundColor: ["#6366f1", "#8b5cf6", "#a855f7"],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: undefined,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          backgroundColor: "rgba(15, 23, 42, 0.8)",
          titleColor: "#f1f5f9",
          bodyColor: "#e2e8f0",
          borderColor: "rgba(99, 102, 241, 0.3)",
          borderWidth: 1,
          padding: 12,
          displayColors: false,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: "rgba(148, 163, 184, 0.05)",
            drawBorder: false,
          },
        },
        x: {
          grid: {
            display: false,
            drawBorder: false,
          },
        },
      },
    },
  });
}
