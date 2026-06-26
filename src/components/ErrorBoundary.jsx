import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container section-padding" style={{ marginTop: '80px', textAlign: 'center' }}>
          <h2 style={{ color: 'var(--color-brand-blue)' }}>Oops, something went wrong.</h2>
          <p>We're sorry, an unexpected error occurred. Please refresh the page.</p>
          <button className="btn btn-primary mt-4" onClick={() => window.location.href = '/'}>
            Return Home
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
