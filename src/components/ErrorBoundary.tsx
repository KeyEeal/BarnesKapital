import { Component, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  override componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  override render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "100vh",
              padding: "2rem",
              textAlign: "center",
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              color: "#121814",
              background: "#FFFBFC",
            }}
          >
            <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
              Something went wrong.
            </h1>
            <p
              style={{ fontSize: "1.1rem", lineHeight: 1.6, maxWidth: "600px" }}
            >
              We apologize for the inconvenience. Please refresh the page or
              return to the{" "}
              <a
                href="/"
                style={{ color: "#3F4A43", textDecoration: "underline" }}
              >
                homepage
              </a>
              .
            </p>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
