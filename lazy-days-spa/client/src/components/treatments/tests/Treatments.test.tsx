import { screen } from '@testing-library/react';

import { renderWithQueryClient } from '../../../test-utils';
import { Treatments } from '../Treatments';

test('renders response from query', () => {
  renderWithQueryClient(<Treatments />);
});
