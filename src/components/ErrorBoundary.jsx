import React from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-[#121212] text-gray-900 dark:text-white px-6">
          <h1 className="text-6xl font-bold text-blue-600 mb-4">Oops!</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 text-center max-w-md">
            Something went wrong. Please try refreshing the page.
          </p>
          <Link
            to="/"
            onClick={() => this.setState({ hasError: false })}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            Go Home
          </Link>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
