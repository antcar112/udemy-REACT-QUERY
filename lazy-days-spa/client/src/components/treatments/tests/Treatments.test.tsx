import { screen } from '@testing-library/react';

import { renderWithQueryClient } from '../../../test-utils';
import { Treatments } from '../Treatments';

test('renders response from query', async () => {
  renderWithQueryClient(<Treatments />);
  const { findAllByRole } = screen;

  const treatmentTitles = await findAllByRole('heading', {
    name: /massage|facial|scrub/i,
  });
  expect(treatmentTitles).toHaveLength(3);
});
