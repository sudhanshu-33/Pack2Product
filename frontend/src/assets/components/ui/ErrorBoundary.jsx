import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error Boundary:", error, errorInfo);
  }

  handleRefresh = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">

          <div className="max-w-md w-full bg-white rounded-3xl shadow-lg p-8 text-center">

            <div className="h-16 w-16 mx-auto rounded-2xl bg-red-100 flex items-center justify-center text-3xl">
              ⚠️
            </div>

            <h1 className="mt-5 text-2xl font-bold text-gray-900">
              Something went wrong
            </h1>

            <p className="mt-3 text-sm text-gray-500">
              An unexpected error occurred while rendering this page.
              Please refresh and try again.
            </p>

            <button
              onClick={this.handleRefresh}
              className="mt-6 w-full rounded-xl bg-green-600 hover:bg-green-700 text-white py-3 font-semibold transition"
            >
              Refresh Page
            </button>

          </div>

        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;