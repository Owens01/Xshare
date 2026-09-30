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
        <div className="min-h-screen flex flex-col items-center justify-center bg-indigo-100 dark:bg-inherit text-gray-900 dark:text-white px-6">
          <h1 className="text-6xl font-bold text-indigo-400 mb-4">Oops!</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 text-center max-w-md">
            Something went wrong. Please try refreshing the page.
          </p>
          <Link
            to="/"
            onClick={() => this.setState({ hasError: false })}
            className="bg-indigo-400 text-white px-6 py-3 rounded-lg hover:bg-indigo-500 transition font-semibold"
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
